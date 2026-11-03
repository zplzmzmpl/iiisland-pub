(() => {
  'use strict';
  const tracks = [
    { title:'慢一点，也没关系', cover:'window', word:'窗边<br>电台', duration:128, lines:['让城市的声音，轻一点','把时间，留给喜欢的旋律','慢一点，也没关系','这一首，陪你走完今天'] },
    { title:'留一扇窗给风', cover:'wind', word:'一扇<br>窗', duration:154, lines:['午后的风，翻过这一页','把今天的心事，轻轻放在窗边','留一扇窗，让音乐经过','下一站，还是喜欢的晴天'] },
    { title:'夜色慢慢', cover:'night', word:'夜色<br>慢慢', duration:142, lines:['街灯把影子，拉长一点','沿着旋律，走过这条街','夜色慢慢，心事也慢慢','等最后一盏灯，为你亮着'] }
  ];
  const players = { apple:'Apple Music', spotify:'Spotify', qq:'QQ 音乐', netease:'网易云音乐' };
  const state = { track:0, playing:true, time:28, volume:65, open:true, player:'apple', auto:true };
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const timeLabel = t => `${Math.floor(t/60)}:${String(Math.floor(t%60)).padStart(2,'0')}`;
  const track = () => tracks[state.track];
  const lineIndex = () => Math.min(3, Math.floor(state.time / (track().duration / 4)));
  const lyric = () => track().lines[lineIndex()];
  let hoverTimer;
  let hoverSuppressed = false;
  let previousVolume = 65;

  function announce(message) { $('#demo-announcement').textContent = message; }
  function setText(binding, value) { $$(`[data-bind="${binding}"]`).forEach(el => { if(el.textContent !== value) el.textContent=value; }); }
  function syncTimeline() {
    const current = track();
    const currentLyric = lyric();
    setText('elapsed',timeLabel(state.time));
    setText('duration',timeLabel(current.duration));
    setText('lyric',currentLyric);
    setText('capsule',currentLyric);
    $$('.capsule').forEach(el => el.setAttribute('aria-hidden',String(state.open)));
    $$('.seek').forEach(el => {
      el.max=current.duration;
      if(document.activeElement!==el) el.value=Math.floor(state.time);
      el.style.setProperty('--fill',`${Math.min(100,Math.max(0,state.time/current.duration*100))}%`);
      el.setAttribute('aria-valuetext',`${timeLabel(state.time)}，共 ${timeLabel(current.duration)}`);
    });
  }

  function render() {
    const current = track();
    setText('title',current.title);
    setText('source',`${players[state.player]} · ${state.auto ? '自动模式' : '手动模式'}演示`);
    $$('[data-cover]').forEach(el=>{ el.dataset.cover=current.cover; });
    $$('[data-bind="cover-word"]').forEach(el=>{el.innerHTML=current.word;});
    $$('.music-island').forEach(el=>{
      el.classList.toggle('is-open',state.open);
      el.classList.toggle('is-paused',!state.playing);
      const content=el.querySelector('.island-content');
      content.inert=!state.open;
      content.setAttribute('aria-hidden',String(!state.open));
      const closed=el.querySelector('.closed-trigger');
      closed.inert=state.open;
      closed.setAttribute('aria-hidden',String(state.open));
      closed.setAttribute('aria-expanded',String(state.open));
    });
    $$('.compact-island').forEach(el=>el.classList.toggle('is-paused',!state.playing));
    $$('[data-action="play"]').forEach(el=>{
      el.setAttribute('aria-label',state.playing?'暂停演示':'播放演示');
      el.setAttribute('aria-pressed',String(state.playing));
      el.classList.toggle('is-paused',!state.playing);
      el.querySelector('.play-shape').setAttribute('d',state.playing?'M8 5v14M16 5v14':'M7 4l13 8-13 8Z');
    });
    $$('[data-action="mute"]').forEach(el=>{
      el.setAttribute('aria-pressed',String(state.volume===0));
      el.setAttribute('aria-label',state.volume===0?'取消演示静音':'静音演示');
      el.parentElement.classList.toggle('is-muted',state.volume===0);
    });
    $$('.volume').forEach(el=>{el.value=state.volume;el.style.setProperty('--fill',`${state.volume}%`);el.setAttribute('aria-valuetext',`${state.volume}%`);});
    $$('[data-action="toggle"]').forEach(el=>el.setAttribute('aria-expanded',String(state.open)));
    const expandLabel=$('#expand .label');
    if(expandLabel) expandLabel.textContent=state.open?'收起面板':'展开面板';
    $$('[data-player]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.player===state.player)));
    $('#selected-player').textContent=players[state.player];
    const partial=['qq','netease'].includes(state.player);
    $$('.volume,[data-action="mute"]').forEach(el=>{el.disabled=partial;});
    const setCapability=(el,text,status)=>{el.textContent=text;el.dataset.state=status;};
    setCapability($('#playback-capability'),partial?'依系统媒体焦点':'支持',partial?'partial':'yes');
    setCapability($('#extra-capability'),partial?'暂不支持':'支持',partial?'no':'yes');
    $('#player-note').textContent=partial?'首次使用时，请先在播放器内播放歌曲。播放、切歌与进度控制取决于系统媒体焦点和可用能力。':'首次连接时，macOS 可能请求自动化授权。';
    $('#detection-note').textContent=state.auto?'应用内优先跟随最近开始播放的来源，全部暂停时保留当前来源。':`手动模式固定为 ${players[state.player]}，不会被其他播放器切走。`;
    $$('.icon-button').forEach(el=>{el.title=el.getAttribute('aria-label');});
    syncTimeline();
  }

  function setOpen(open, suppress=false) {
    const openedFromTrigger=open&&document.activeElement?.closest('.closed-trigger');
    const focusTarget=!open ? document.activeElement.closest('.music-island')?.querySelector('.closed-trigger') : null;
    clearTimeout(hoverTimer);
    state.open=open;
    hoverSuppressed=suppress;
    render();
    if(openedFromTrigger) document.querySelector('.music-island .collapse-button')?.focus({preventScroll:true});
    if(focusTarget) focusTarget.focus({preventScroll:true});
  }
  function changeTrack(delta) {
    state.track=(state.track+delta+tracks.length)%tracks.length;
    state.time=0;
    render();
    $$('.music-island').forEach(el=>{
      el.classList.remove('track-change');
      void el.offsetWidth;
      el.classList.add('track-change');
    });
    announce(`已切换到 ${track().title}`);
  }
  document.addEventListener('click',event=>{
    const target=event.target.closest('[data-action],[data-player]');
    if(!target) return;
    if(target.dataset.player) {
      state.player=target.dataset.player;
      render();
      announce(`已选择 ${players[state.player]}`);
      return;
    }
    switch(target.dataset.action) {
      case 'open': setOpen(true);break;
      case 'close': setOpen(false,true);break;
      case 'toggle': setOpen(!state.open,true);break;
      case 'play': state.playing=!state.playing;render();break;
      case 'next': changeTrack(1);break;
      case 'previous': changeTrack(-1);break;
      case 'mute': if(state.volume>0){previousVolume=state.volume;state.volume=0;}else state.volume=previousVolume||65;render();break;
    }
  });
  document.addEventListener('input',event=>{
    const el=event.target;
    if(el.dataset.action==='seek') {state.time=Number(el.value);syncTimeline();}
    if(el.dataset.action==='volume') {state.volume=Number(el.value);render();}
  });
  $('#auto-detect').addEventListener('change',event=>{state.auto=event.target.checked;render();});
  $$('.music-island').forEach(el=>{
    el.addEventListener('pointerenter',event=>{
      if(event.pointerType!=='mouse') return;
      clearTimeout(hoverTimer);
      if(!hoverSuppressed&&!state.open) hoverTimer=setTimeout(()=>setOpen(true),180);
    });
    el.addEventListener('pointerleave',event=>{
      if(event.pointerType!=='mouse') return;
      clearTimeout(hoverTimer);
      hoverSuppressed=false;
      if(!el.querySelector(':focus-visible')) hoverTimer=setTimeout(()=>setOpen(false),280);
    });
    el.addEventListener('focusout',()=>{
      requestAnimationFrame(()=>{
        if(matchMedia('(hover: hover)').matches&&!el.contains(document.activeElement)&&!el.matches(':hover')) {
          clearTimeout(hoverTimer);
          hoverTimer=setTimeout(()=>setOpen(false),280);
        }
      });
    });

  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&state.open){event.preventDefault();setOpen(false,true);}
  });
  // Keep native details as the no-script fallback; animate from the visible height.
  const faqMotion=matchMedia('(prefers-reduced-motion: reduce)');
  const faqItems=$$('.faq-list details').map(detail=>({detail,summary:detail.querySelector('summary'),answer:detail.querySelector('.faq-answer'),open:detail.open,animation:null}));
  function finishFaq(item) {
    item.animation?.cancel();
    item.animation=null;
    item.detail.open=item.open;
    item.detail.style.height='';
    item.detail.style.overflow='';
  }
  function toggleFaq(item,open) {
    const from=item.detail.getBoundingClientRect().height;
    item.animation?.cancel();
    item.open=open;
    item.summary.setAttribute('aria-expanded',String(open));
    item.detail.classList.toggle('is-expanded',open);
    item.answer.inert=!open;
    item.answer.setAttribute('aria-hidden',String(!open));
    if(faqMotion.matches) {finishFaq(item);return;}
    item.detail.open=true;
    item.detail.style.height='auto';
    const to=open?item.detail.getBoundingClientRect().height:item.summary.getBoundingClientRect().height;
    item.detail.style.height=from+'px';
    item.detail.style.overflow='hidden';
    const animation=item.detail.animate({height:[from+'px',to+'px']},{duration:260,easing:'cubic-bezier(.2,.7,.2,1)'});
    item.animation=animation;
    animation.onfinish=()=>{if(item.animation===animation) finishFaq(item);};
  }
  faqItems.forEach(item=>{
    item.detail.classList.toggle('is-expanded',item.open);
    item.summary.setAttribute('aria-expanded',String(item.open));
    item.answer.inert=!item.open;
    item.answer.setAttribute('aria-hidden',String(!item.open));
    item.summary.addEventListener('click',event=>{
      event.preventDefault();
      const open=!item.open;
      faqItems.forEach(other=>{if(other!==item&&other.open)toggleFaq(other,false);});
      toggleFaq(item,open);
    });
  });
  faqMotion.addEventListener('change',()=>faqItems.forEach(finishFaq));
  // Capsule playgrounds: desktop hover preview + mobile auto-hide demo
  function setupCapsuleDemo(demo){
    const live=demo.querySelector('[data-cap-live]');
    const alpha=demo.querySelector('[data-cap-alpha]');
    if(!live||!alpha) return;
    const out=demo.querySelector('[data-cap-out]');
    const note=demo.querySelector('[data-cap-min-note]');
    const presets=[...demo.querySelectorAll('[data-cap-preset]')];
    const presetLabels={dark:'深底浅字',light:'浅底深字'};
    const minFor=preset=>Number(demo.dataset['capMin'+preset[0].toUpperCase()+preset.slice(1)])||0;
    const syncMin=()=>{
      const preset=live.dataset.preset;
      const min=minFor(preset);
      if(Number(alpha.value)<min) alpha.value=String(min);
      if(note){
        note.hidden=min<=0;
        note.textContent=min>0?'为保证可读，「'+presetLabels[preset]+'」最低保留 '+min+'% 底色。':'';
      }
    };
    const apply=()=>{
      live.style.setProperty('--cap-a',String(Number(alpha.value)/100));
      alpha.style.setProperty('--fill',alpha.value+'%');
      if(out) out.textContent=alpha.value+'%';
    };
    const refresh=()=>{syncMin();apply();};
    presets.forEach(btn=>btn.addEventListener('click',()=>{
      presets.forEach(b=>{
        const on=b===btn;
        b.classList.toggle('is-on',on);
        b.setAttribute('aria-pressed',String(on));
      });
      live.dataset.preset=btn.dataset.capPreset;
      refresh();
    }));
    alpha.addEventListener('input',refresh);
    refresh();
  }
  $$('[data-cap-demo]').forEach(setupCapsuleDemo);
  let lastTick=performance.now();
  const playbackTick=setInterval(()=>{
    const now=performance.now();
    const elapsed=Math.min(1.5,(now-lastTick)/1000);
    lastTick=now;
    if(!state.playing||document.hidden) return;
    state.time+=elapsed;
    if(state.time>=track().duration) changeTrack(1);
    else syncTimeline();
  },500);
  document.addEventListener('visibilitychange',()=>{lastTick=performance.now();});
  window.addEventListener('pagehide',()=>clearInterval(playbackTick),{once:true});
  if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('arrive');observer.unobserve(entry.target);}});
    },{threshold:.12});
    $$('.size-showcase').forEach(el=>observer.observe(el));
    // Mobile scroll reveals (mobile.css only). The html class gates the
    // hidden state, so without JavaScript everything stays visible.
    if(matchMedia('(max-width: 760px)').matches) {
      document.documentElement.classList.add('reveal-ready');
      const revealer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('arrive');revealer.unobserve(entry.target);}});
      },{threshold:.06,rootMargin:'0px 0px -5% 0px'});
      $$('.section,.download').forEach(el=>revealer.observe(el));
    }
  }
  // 胶囊歌词与岛体的演示循环只在进入视口时播放，离开即冻结
  const loopSections=$$('.m-capsule-sec,.m-appear-sec');
  if(loopSections.length&&'IntersectionObserver' in window){
    document.documentElement.classList.add('motion-ready');
    const loopObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>entry.target.classList.toggle('is-live',entry.isIntersecting));
    },{rootMargin:'80px 0px'});
    loopSections.forEach(el=>loopObserver.observe(el));
  }
  render();
})();
