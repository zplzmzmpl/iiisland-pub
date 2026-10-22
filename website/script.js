(() => {
  'use strict';
  const tracks = [
    { title:'慢一点，也没关系', cover:'window', word:'窗边<br>电台', duration:128, lines:['让城市的声音，轻一点','把时间，留给喜欢的旋律','慢一点，也没关系','这一首，陪你走完今天'] },
    { title:'留一扇窗给风', cover:'wind', word:'一扇<br>窗', duration:154, lines:['午后的风，翻过这一页','把今天的心事，轻轻放在窗边','留一扇窗，让音乐经过','下一站，还是喜欢的晴天'] },
    { title:'夜色慢慢', cover:'night', word:'夜色<br>慢慢', duration:142, lines:['街灯把影子，拉长一点','沿着旋律，走过这条街','夜色慢慢，心事也慢慢','等最后一盏灯，为你亮着'] }
  ];
  const players = { apple:'Apple Music', spotify:'Spotify', qq:'QQ 音乐', netease:'网易云音乐' };
  const state = { track:0, playing:true, time:28, volume:65, open:true, lyrics:true, persist:true, appearance:'black', notched:true, collapsed:280, expanded:440, night:false, player:'apple', auto:true };
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const hero = $('[data-demo="hero"]');
  const mirror = hero.cloneNode(true);
  mirror.dataset.demo = 'settings';
  mirror.setAttribute('aria-label','外观设置中的音乐播放演示');
  $('#settings-island-mount').append(mirror);
  const timeLabel = t => `${Math.floor(t/60)}:${String(Math.floor(t%60)).padStart(2,'0')}`;
  const track = () => tracks[state.track];
  const lineIndex = () => Math.min(3, Math.floor(state.time / (track().duration / 4)));
  const lyric = () => track().lines[lineIndex()];
  let previousLine = -1;
  let previousTrack = -1;
  let hoverTimer;
  let hoverSuppressed = false;
  let previousVolume = 65;

  function announce(message) { $('#demo-announcement').textContent = message; }
  function setText(binding, value) { $$(`[data-bind="${binding}"]`).forEach(el => { if(el.textContent !== value) el.textContent=value; }); }
  function syncTimeline() {
    const current = track();
    const currentLyric = lyric();
    const showLyrics = state.lyrics && (state.playing || state.persist);
    setText('elapsed',timeLabel(state.time));
    setText('duration',timeLabel(current.duration));
    setText('lyric',showLyrics ? currentLyric : '');
    setText('capsule',showLyrics ? currentLyric : '');
    setText('compact-lyric',showLyrics ? currentLyric : '');
    $$('.capsule,.compact-capsule').forEach(el => {el.style.visibility=showLyrics ? 'visible' : 'hidden';el.setAttribute('aria-hidden',String(!showLyrics||(el.classList.contains('capsule')&&state.open)));});
    $$('.seek').forEach(el => {
      el.max=current.duration;
      if(document.activeElement!==el) el.value=Math.floor(state.time);
      el.setAttribute('aria-valuetext',`${timeLabel(state.time)}，共 ${timeLabel(current.duration)}`);
    });
    if(previousLine!==lineIndex() || previousTrack!==state.track) {
      $$('#lyrics-list button').forEach((el,index)=>{
        el.textContent=current.lines[index];
        if(index===lineIndex()) el.setAttribute('aria-current','true');
        else el.removeAttribute('aria-current');
      });
      previousLine=lineIndex(); previousTrack=state.track;
    }
    $('#lyric-state').textContent=!state.lyrics ? '歌词已隐藏，随时可以再打开。' : !state.playing && !state.persist ? '播放暂停，歌词也暂时收起。' : !state.playing ? '音乐暂停，最后一句仍在。' : '歌词就在岛的左侧。';
  }

  function scalePreview() {
    const stage=$('.settings-stage');
    const mount=$('#settings-island-mount');
    const available=Math.max(200,stage.clientWidth-32);
    // A collapsed island shares the rail with lyrics; reserve their space before sizing it.
    const desired=state.open?state.expanded:Math.min(state.collapsed,Math.max(104,Math.round(available*.42)));
    const scale=state.open?Math.min(1,available/desired):1;
    mount.style.width=String(desired*scale)+'px';
    mount.style.height=String((state.open?(state.notched?266:248):44)*scale)+'px';
    mirror.style.setProperty('--preview-scale',String(scale));
    mirror.style.setProperty('--preview-actual-width',String(desired)+'px');
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
    $$('[data-preview]').forEach(el=>{
      el.style.setProperty('--collapsed-width',`${state.collapsed}px`);
      el.style.setProperty('--expanded-width',`${state.expanded}px`);
      el.classList.toggle('is-glass',state.appearance==='glass');
      el.classList.toggle('flat-layout',!state.notched);
    });
    $$('.compact-island').forEach(el=>el.classList.toggle('is-paused',!state.playing));
    $$('[data-action="play"]').forEach(el=>{
      el.setAttribute('aria-label',state.playing?'暂停演示':'播放演示');
      if(el.id==='lyrics-play') {el.textContent=state.playing?'暂停演示':'继续播放';return;}
      el.setAttribute('aria-pressed',String(state.playing));
      el.classList.toggle('is-paused',!state.playing);
      el.querySelector('.play-shape').setAttribute('d',state.playing?'M8 5v14M16 5v14':'M7 4l13 8-13 8Z');
    });
    $$('[data-action="mute"]').forEach(el=>{
      el.setAttribute('aria-pressed',String(state.volume===0));
      el.setAttribute('aria-label',state.volume===0?'取消演示静音':'静音演示');
      el.parentElement.classList.toggle('is-muted',state.volume===0);
    });
    $$('.volume').forEach(el=>{el.value=state.volume;el.setAttribute('aria-valuetext',`${state.volume}%`);});
    $$('[data-action="toggle"]').forEach(el=>el.setAttribute('aria-expanded',String(state.open)));
    $('#expand').innerHTML=state.open?'收起试试 <span aria-hidden="true">↑</span>':'展开试试 <span aria-hidden="true">↓</span>';
    $('#preview-toggle').textContent=state.open?'查看收起态':'查看展开态';
    $('#size-note').textContent=state.open?`展开 ${state.expanded} × 180 pt`:`收起 ${state.collapsed} × 33 pt`;
    $('#theme-toggle').textContent=state.night?'切到日间':'切到夜间';
    $('#theme-toggle').setAttribute('aria-pressed',String(state.night));
    $('.settings-stage').classList.toggle('is-night',state.night);
    $$('[data-player]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.player===state.player)));
    $('#selected-player').textContent=players[state.player];
    const partial=['qq','netease'].includes(state.player);
    $$('.volume,[data-action="mute"]').forEach(el=>{el.disabled=partial;});
    $('#playback-capability').textContent=partial?'依系统媒体焦点':'支持';
    $('#extra-capability').textContent=partial?'暂不支持':'支持';
    $('#player-note').textContent=partial?'首次使用时，请先在播放器内播放歌曲。播放、切歌与进度控制取决于系统媒体焦点和可用能力。':'首次连接时，macOS 可能请求自动化授权。';
    $('#detection-note').textContent=state.auto?'应用内优先跟随最近开始播放的来源，全部暂停时保留当前来源。':`手动模式固定为 ${players[state.player]}，不会被其他播放器切走。`;
    scalePreview();
    syncTimeline();
  }

  function setOpen(open, suppress=false) {
    const focusTarget=!open ? document.activeElement.closest('.music-island')?.querySelector('.closed-trigger') : null;
    state.open=open;
    hoverSuppressed=suppress;
    render();
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
    const target=event.target.closest('[data-action],[data-line],[data-player]');
    if(!target) return;
    if(target.dataset.line!==undefined) {
      state.time=Number(target.dataset.line)*track().duration/4;
      syncTimeline();
      announce(`已跳转到 ${lyric()}`);
      return;
    }
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
      case 'show-hero': setOpen(true);$('#hero-title').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});break;
    }
  });
  document.addEventListener('input',event=>{
    const el=event.target;
    if(el.dataset.action==='seek') {state.time=Number(el.value);syncTimeline();}
    if(el.dataset.action==='volume') {state.volume=Number(el.value);render();}
  });
  $('#lyrics-enabled').addEventListener('change',event=>{state.lyrics=event.target.checked;syncTimeline();});
  $('#persist-lyrics').addEventListener('change',event=>{state.persist=event.target.checked;syncTimeline();});
  $('#auto-detect').addEventListener('change',event=>{state.auto=event.target.checked;render();});
  $('#custom-controls').addEventListener('input',event=>{
    const el=event.target;
    if(el.name==='appearance') state.appearance=el.value;
    if(el.name==='screen') state.notched=el.value==='notched';
    if(el.id==='collapsed-width') {state.collapsed=Number(el.value);$('#collapsed-value').textContent=`${state.collapsed} pt`;}
    if(el.id==='expanded-width') {state.expanded=Number(el.value);$('#expanded-value').textContent=`${state.expanded} pt`;}
    render();
  });
  $('#custom-controls').addEventListener('reset',()=>{
    Object.assign(state,{appearance:'black',notched:true,collapsed:280,expanded:440,night:false});
    $('#collapsed-value').textContent='280 pt';$('#expanded-value').textContent='440 pt';
    render();announce('外观与尺寸已还原');
  });
  $('#theme-toggle').addEventListener('click',()=>{state.night=!state.night;render();});
  $$('.music-island').forEach(el=>{
    el.addEventListener('pointerenter',event=>{
      if(event.pointerType==='mouse'&&!hoverSuppressed&&!state.open) hoverTimer=setTimeout(()=>setOpen(true),220);
    });
    el.addEventListener('pointerleave',()=>{clearTimeout(hoverTimer);hoverSuppressed=false;});
    el.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();setOpen(false,true);}});
  });
  $$('.faq-list details').forEach(detail=>detail.addEventListener('toggle',()=>{
    if(detail.open) $$('.faq-list details').forEach(other=>{if(other!==detail)other.open=false;});
  }));
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
    $$('.hero-intro h1,.hero-deck,.main-stage,.section-heading h2,.section-heading>p,.lyrics-sheet,.lyrics-options,.custom-controls,.custom-preview,.player-picker,.player-detail,.faq-heading,.install-heading,.install-action,.footer-mark').forEach(el=>observer.observe(el));
  }
  new ResizeObserver(scalePreview).observe($('.settings-stage'));
  render();
})();
