const SUPABASE_URL = 'https://fconwsdmvlqknkxfhmjr.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_ieb7pEIwUKRG0afU2kQCSg_H0QGOdIN';
const hasSupabaseConfig =
  SUPABASE_URL.startsWith('https://') &&
  !SUPABASE_URL.includes('YOUR_PROJECT_ID') &&
  SUPABASE_PUBLISHABLE_KEY.startsWith('sb_publishable_') &&
  !SUPABASE_PUBLISHABLE_KEY.includes('YOUR_SUPABASE_PUBLISHABLE_KEY');
const supabaseClient = hasSupabaseConfig && window.supabase?.createClient
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
  : null;

const $=s=>document.querySelector(s);
const OLDW={easy:[['dog','🐶'],['sun','☀️'],['cat','🐱'],['bus','🚌'],['pig','🐷'],['hat','🎩']],
medium:[['ball','⚽'],['book','📖'],['fish','🐟'],['apple','🍎'],['house','🏠'],['star','⭐']],
hard:[['umbrella','☂️'],['rainbow','🌈'],['banana','🍌'],['rabbit','🐰'],['flower','🌸'],['elephant','🐘']]};
const RAW=`dog🐶 sun☀️ cat🐱 bus🚌 pig🐷 hat🎩 cow🐮 hen🐔 fox🦊 bee🐝 bat🦇 owl🦉 ant🐜 egg🥚 bed🛏️ key🔑 car🚗 bag🎒 box📦 pie🥧 tea🍵 jar🫙 van🚐 web🕸️ leg🦵 ear👂 eye👁️ arm💪 nut🥜 sea🌊 log🪵 pan🍳 bin🗑️ ice🧊 ape🦍 ram🐏 rat🐀 bug🐛 toy🧸 map🗺️ pen🖊️
fish🐟 ball⚽ book📖 star⭐ moon🌙 tree🌳 bird🐦 duck🦆 frog🐸 bear🐻 lion🦁 wolf🐺 deer🦌 crab🦀 goat🐐 seal🦭 swan🦢 kiwi🥝 corn🌽 cake🍰 milk🥛 rice🍚 pear🍐 leaf🍃 rose🌹 rain🌧️ snow❄️ fire🔥 wind💨 bell🔔 boat⛵ ship🚢 bike🚲 taxi🚕 sock🧦 shoe👟 coat🧥 ring💍 gift🎁 kite🪁 drum🥁 lamp💡 door🚪 home🏠 hand✋ foot🦶 nose👃 baby👶 king🤴 bone🦴 tent⛺ fork🍴 bowl🥣 soap🧼 sofa🛋️ flag🚩 rock🪨 worm🪱 lamb🐑 dove🕊️ moth🦋
apple🍎 house🏡 mouse🐭 tiger🐯 zebra🦓 horse🐴 sheep🐏 snake🐍 whale🐋 shark🦈 bread🍞 pizza🍕 cheese🧀 grape🍇 lemon🍋 mango🥭 peach🍑 melon🍈 onion🧅 carrot🥕 potato🥔 tomato🍅 banana🍌 orange🍊 cherry🍒 flower🌸 rabbit🐰 rocket🚀 monkey🐵 turtle🐢 spider🕷️ cloud☁️ plane✈️ train🚆 truck🚚 robot🤖 clock🕐 phone📱 chair🪑 piano🎹 candy🍬 donut🍩 cookie🍪 honey🍯 sushi🍣 salad🥗 bacon🥓 pasta🍝 crown👑 sword⚔️ ghost👻 alien👽 angel👼 clown🤡 smile😊 dress👗 shirt👕 pants👖 boots🥾 scarf🧣 glove🧤 watch⌚ globe🌍 beach🏖️ island🏝️ camel🐫 parrot🦜 eagle🦅 koala🐨 panda🐼 llama🦙 otter🦦 skunk🦨 squid🦑 snail🐌 cactus🌵 tulip🌷 daisy🌼 dragon🐉 castle🏰 bridge🌉 guitar🎸 violin🎻 bucket🪣 hammer🔨 magnet🧲 candle🕯️ basket🧺 pencil✏️ ruler📏 trophy🏆 medal🏅 wizard🧙 fairy🧚 tooth🦷 brain🧠 heart❤️ money💰 camera📷 pirate🏴‍☠️
umbrella☂️ rainbow🌈 elephant🐘 giraffe🦒 dolphin🐬 penguin🐧 pumpkin🎃 balloon🎈 sandwich🥪 trumpet🎺 popcorn🍿 lobster🦞 octopus🐙 volcano🌋 airplane🛩️ tractor🚜 ladybug🐞 kangaroo🦘 butterfly🦋 hamburger🍔 pineapple🍍 strawberry🍓 watermelon🍉 snowman⛄ scissors✂️ mushroom🍄 football🏈 sunflower🌻 telescope🔭 backpack🎒 fireworks🎆 helicopter🚁 motorcycle🏍️ crocodile🐊 hedgehog🦔 chocolate🍫 cupcake🧁 blueberry🫐 broccoli🥦 cucumber🥒 sailboat⛵ firetruck🚒 notebook📓 keyboard⌨️ computer💻 telephone☎️ mountain⛰️ skeleton💀 snowflake❄️ dinosaur🦖 hamster🐹 cheetah🐆 flamingo🦩 pancake🥞 unicorn🦄 mermaid🧜 fountain⛲ skateboard🛹 peacock🦚 squirrel🐿️ gorilla🦍 buffalo🦬 raccoon🦝 jellyfish🪼 crayon🖍️ calendar📅 envelope✉️ ambulance🚑 suitcase🧳 lollipop🍭 avocado🥑 coconut🥥 burrito🌯 spaghetti🍝 dumpling🥟 pretzel🥨 lantern🏮 compass🧭 diamond💎 lightning⚡ tornado🌪️ hospital🏥`;
function mk(){const seen=new Set(),a=[];RAW.split(/\s+/).forEach(t=>{const m=t.match(/^([a-z]+)(.+)$/);if(m&&!seen.has(m[1])){seen.add(m[1]);a.push([m[1],m[2]])}});
 let s=7;const r=()=>(s=(s*16807)%2147483647)/2147483647;for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}
 return{easy:a.filter(w=>w[0].length<=4),medium:a.filter(w=>w[0].length>4&&w[0].length<7),hard:a.filter(w=>w[0].length>=7)}}
const WORDS=mk(),LV=6,nLv=l=>Math.max(1,Math.floor(WORDS[l].length/LV));
const emptyProgress=()=>({easy:{},medium:{},hard:{}});
let PR=emptyProgress(),ML='easy',currentProgressUserId=null,progressLoaded=false,progressLoadPromise=null;
function setProgressStatus(message,error=false){const status=$('#progress-status');status.textContent=message;status.hidden=!message;status.classList.toggle('error',error)}
async function loadUserProgress(userId){
 const {data,error}=await supabaseClient.from('level_progress').select('difficulty,level,stars').eq('user_id',userId);
 if(error)throw error;
 if(userId!==currentProgressUserId)return;
 const progress=emptyProgress();
 for(const row of data){
  if(!['easy','medium','hard'].includes(row.difficulty)||!Number.isInteger(row.level)||!Number.isInteger(row.stars))continue;
  progress[row.difficulty][row.level]=row.stars;
 }
 PR=progress;progressLoaded=true;setProgressStatus('');
}
async function ensureUserProgress(){
 if(progressLoaded)return;
 if(!currentProgressUserId)throw new Error('You must be signed in to load saved levels.');
 if(!progressLoadPromise){
  const userId=currentProgressUserId;
  const request=loadUserProgress(userId).catch(error=>{
   if(userId===currentProgressUserId)setProgressStatus('Could not load your saved levels. Check your connection and try again.',true);
   throw error;
  }).finally(()=>{if(progressLoadPromise===request)progressLoadPromise=null});
  progressLoadPromise=request;
 }
 return progressLoadPromise;
}
async function openMap(l){
 try{await ensureUserProgress()}catch(error){console.error('Could not load saved level progress:',error);return}
 ML=l;$('#mh').textContent={easy:'🌱 Easy',medium:'🚀 Medium',hard:'🐉 Hard'}[l];const c={easy:'var(--grn)',medium:'var(--blu)',hard:'var(--pur)'}[l];
 $('#lg').innerHTML=Array.from({length:nLv(l)},(_,i)=>{const n=i+1,ok=n==1||PR[l][n-1],st=PR[l][n];return `<button class="lv ${ok?'':'lk'}" style="--c:${c}" data-n="${n}" ${ok?'':'disabled'}>${ok?n:'🔒'}<small>${st?'⭐'.repeat(st):ok?'play':''}</small></button>`}).join('');show('map')}
const STK=[['🦄',30],['🐲',80],['🚀',150],['👑',240],['🏆',350],['🌟',500]];
const CHEER=['Amazing!','You got it!','Great job!','Super star!','Fantastic!','Wow, brilliant!'];
const OOPS=['Oops! Try again!','Almost! You can do it!','Not quite! Keep going!'];
let total=0,S={};
try{total=+localStorage.getItem('spelly')||0}catch(e){}
const save=()=>{try{localStorage.setItem('spelly',total)}catch(e){}};

/* ---------- sound ---------- */
let AC;const ac=()=>{AC=AC||new(window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume();return AC};
function tone(f,t=0,d=.15,type='sine',v=.6){try{const a=ac(),o=a.createOscillator(),g=a.createGain(),s=a.currentTime+t;o.type=type;o.frequency.setValueAtTime(f,s);g.gain.setValueAtTime(v,s);g.gain.exponentialRampToValueAtTime(.001,s+d);o.connect(g);g.connect(a.destination);o.start(s);o.stop(s+d+.05)}catch(e){}}
const seq=(n,gap,d,type,v)=>n.forEach((f,i)=>tone(f,i*gap,d,type,v));
const sfx={
 tap:i=>{tone(520+i*70,0,.12,'triangle',.7);tone(1040+i*70,0,.06,'sine',.3)},
 undo:()=>tone(300,0,.1,'triangle',.5),
 ok:()=>seq([523,659,784,1046,1318],.09,.25,'square',.35),
 bad:()=>{tone(220,0,.3,'sawtooth',.5);tone(150,.18,.45,'sawtooth',.5)},
 streak:()=>seq([784,988,1175,1568,1976,2349],.07,.22,'triangle',.7),
 unlock:()=>seq([523,659,784,659,784,1046,1318,1568],.12,.3,'square',.4),
 win:()=>seq([523,523,523,784,659,784,1046,1046,1318],.14,.3,'square',.4)
};
let voice;
function say(t,pitch=1.5){try{const u=new SpeechSynthesisUtterance(t);const vs=speechSynthesis.getVoices();voice=voice||vs.find(v=>/^en/i.test(v.lang)&&/female|samantha|zira|google uk|karen/i.test(v.name))||vs.find(v=>/^en/i.test(v.lang));if(voice)u.voice=voice;u.pitch=pitch;u.rate=.95;u.volume=1;speechSynthesis.cancel();speechSynthesis.speak(u)}catch(e){}}
const spellOut=w=>say(w+'. '+w.split('').join(', ')+'.',1.3);

/* ---------- effects ---------- */
const cv=$('#cv'),cx=cv.getContext('2d');let P=[],raf;
function confetti(n=140){cv.width=innerWidth;cv.height=innerHeight;const cols=['#ff4f8b','#ffc928','#2fd27a','#3a8dff','#8a5cff','#ff8a3a'];
 for(let i=0;i<n;i++)P.push({x:innerWidth/2,y:innerHeight*.45,vx:(Math.random()-.5)*18,vy:-Math.random()*18-4,c:cols[i%6],s:Math.random()*10+6,r:Math.random()*6,vr:Math.random()*.4-.2,st:i%5==0});
 cancelAnimationFrame(raf);(function f(){cx.clearRect(0,0,cv.width,cv.height);P.forEach(p=>{p.vy+=.4;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;cx.save();cx.translate(p.x,p.y);cx.rotate(p.r);cx.fillStyle=p.c;if(p.st){cx.font=p.s*3+'px serif';cx.fillText('⭐',0,0)}else cx.fillRect(-p.s/2,-p.s/2,p.s,p.s*.6);cx.restore()});P=P.filter(p=>p.y<cv.height+40);if(P.length)raf=requestAnimationFrame(f);else cx.clearRect(0,0,cv.width,cv.height)})()}
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('on');setTimeout(()=>e.classList.remove('on'),1400)}
(function(){const b=$('#bg'),e=['⭐','🎈','🦋','☁️','🌈','🍭','✨','🐝'];for(let i=0;i<14;i++){const s=document.createElement('span');s.textContent=e[i%8];s.style.left=Math.random()*100+'%';s.style.animationDuration=12+Math.random()*14+'s';s.style.animationDelay=-Math.random()*20+'s';b.appendChild(s)}})();

/* ---------- screens & stickers ---------- */
function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('on',s.id===id))}
function shelf(){$('#tot').textContent=total;$('#stk').innerHTML=STK.map(([e,n])=>`<span class="${total>=n?'':'lock'}" title="${n} points">${e}</span>`).join('')}
function modal(e,t,p,b,fn){$('#me').textContent=e;$('#mt').textContent=t;$('#mp').textContent=p;$('#mb').textContent=b;$('#md').classList.add('on');$('#mb').onclick=()=>{ac();$('#md').classList.remove('on');fn&&fn()}}
function mood(m,t){$('#gm').textContent=m;$('#gb').textContent=t}

/* ---------- game ---------- */
function start(l,n=1){ac();const N=nLv(l);S={l,n,q:WORDS[l].slice((n-1)*LV,n==N?undefined:n*LV).sort(()=>Math.random()-.5),i:0,lives:3,sc:0,st:0,best:0,lock:false};show('game');hud();next();}
function hud(){$('#hearts').textContent='❤️'.repeat(S.lives)+'🖤'.repeat(3-S.lives);$('#streak').textContent='🔥 '+S.st;$('#sc').textContent=S.sc;$('#pg').style.width=S.i/S.q.length*100+'%'}
function next(){
 if(S.i>=S.q.length)return finish();
 const [w,e]=S.q[S.i];S.w=w;S.slots=Array(w.length).fill(null);S.lock=false;
 $('#pic').textContent=e;$('#slots').classList.remove('win');
 let L=w.split('');if(S.l==='hard'){const ex='aeiorstlnmp';for(let k=0;k<2;k++)L.push(ex[Math.floor(Math.random()*ex.length)])}
 do{L.sort(()=>Math.random()-.5)}while(L.join('').startsWith(w)&&L.length<4);
 S.L=L;
 $('#tiles').innerHTML=L.map((c,i)=>`<button class="tile" data-i="${i}" style="--d:${(i*.13).toFixed(2)}s;--r:${i%2?6:-6}deg" aria-label="letter ${c}">${c}</button>`).join('');
 draw();mood('🐻','Spell the word!');
 setTimeout(()=>say('Spell '+w+'!'),300);
}
function draw(){$('#slots').style.setProperty('--n',S.slots.length);
 $('#slots').innerHTML=S.slots.map((v,i)=>`<button class="slot ${v!==null?'f':''}" data-s="${i}" style="--d:${i*.08}s" aria-label="slot ${i+1}">${v!==null?S.L[v]:''}</button>`).join('');
 document.querySelectorAll('.tile').forEach(t=>t.classList.toggle('u',S.slots.includes(+t.dataset.i)));
}
function place(i){
 if(S.lock)return;const k=S.slots.indexOf(null);if(k<0)return;
 S.slots[k]=i;sfx.tap(k);draw();
 if(S.slots.indexOf(null)<0)check();
}
function check(){
 S.lock=true;const g=S.slots.map(i=>S.L[i]).join('');
 setTimeout(()=>g===S.w?right():wrong(),250);
}
function right(){
 S.st++;S.best=Math.max(S.best,S.st);const pts=10+Math.min(S.st-1,5)*2;S.sc+=pts;total+=pts;save();S.i++;
 $('#slots').classList.add('win');sfx.ok();confetti();mood('🐻','+'+pts+' points!');
 setTimeout(()=>say(CHEER[Math.floor(Math.random()*CHEER.length)]),350);
 if(S.st>=2&&S.st%2==0){setTimeout(()=>{sfx.streak();toast('🔥 '+S.st+' in a row!');confetti(80);if(S.st>2)say(S.st+' in a row! On fire!')},900)}
 hud();
 const nw=STK.find(([e,n])=>total>=n&&total-pts<n);
 setTimeout(()=>{if(nw){sfx.unlock();confetti(200);say('You unlocked a new sticker! Wow!');modal(nw[0],'New sticker!','You earned '+nw[1]+' points!','Yay!',next)}else next()},nw?1300:1900);
}
function wrong(){
 S.lives--;S.st=0;hud();sfx.bad();mood('🙈',OOPS[Math.floor(Math.random()*3)]);say(OOPS[Math.floor(Math.random()*3)],1.2);
 const sl=$('#slots');sl.classList.add('shake');
 setTimeout(()=>{sl.classList.remove('shake');
  if(S.lives<=0){say('Oh no! Let’s try again!');modal('😢','Out of hearts!','You scored '+S.sc+' points. Let’s try again!','Play again',()=>start(S.l,S.n));return}
  S.slots.fill(null);S.lock=false;draw()},700);
}
async function finish(){
 $('#pg').style.width='100%';sfx.win();confetti(250);setTimeout(()=>confetti(150),500);
 const stars=S.lives>=3?3:S.lives==2?2:1;
 say('Level complete! You are a spelling champion!');
 const userId=currentProgressUserId,level=S.n,difficulty=S.l;
 const bestStars=Math.max(stars,PR[difficulty][level]||0);
 try{
  const {error}=await supabaseClient.from('level_progress').upsert(
   {user_id:userId,difficulty,level,stars:bestStars},
   {onConflict:'user_id,difficulty,level'}
  );
  if(error)throw error;
  if(userId===currentProgressUserId)setProgressStatus('');
 }catch(error){
  console.error('Could not save level progress:',error);
  if(userId===currentProgressUserId)setProgressStatus('Your level was completed, but progress could not be saved. Check your connection and try again.',true);
 }
 PR[difficulty][level]=bestStars;
 const more=S.n<nLv(S.l);
 modal('🏆','Level '+S.n+' complete!','⭐'.repeat(stars)+'☆'.repeat(3-stars)+'  ·  '+S.sc+' points  ·  Best streak '+S.best,more?'Next level ▶':'Level map',()=>{shelf();more?start(S.l,S.n+1):openMap(S.l)});
}

/* ---------- events ---------- */
document.querySelectorAll('[data-l]').forEach(b=>b.onclick=()=>{ac();openMap(b.dataset.l)});
$('#lg').onclick=e=>{const b=e.target.closest('.lv');if(b&&!b.disabled)start(ML,+b.dataset.n)};
$('#mback').onclick=()=>{shelf();show('home')};
$('#tiles').onclick=e=>{const t=e.target.closest('.tile');if(t&&!t.classList.contains('u'))place(+t.dataset.i)};
$('#slots').onclick=e=>{const s=e.target.closest('.slot');if(!s||S.lock)return;const k=+s.dataset.s;if(S.slots[k]!==null){S.slots[k]=null;sfx.undo();draw()}};
$('#hear').onclick=()=>{ac();spellOut(S.w)};
$('#pic').onclick=()=>say(S.w);
$('#clr').onclick=()=>{if(S.lock)return;S.slots.fill(null);sfx.undo();draw()};
$('#home2').onclick=()=>{speechSynthesis.cancel();openMap(S.l)};
$('#hm').onclick=()=>{ac();sfx.streak();confetti(60);say('Hi! I am Spelly! Let’s spell!')};
shelf();

let isRegistering = false;
let isSubmittingAuth = false;
const authForm = $('#auth-form');
const authMessage = $('#auth-message');
const authPassword = $('#auth-password');
const authUsername = $('#auth-username');
const authEmail = $('#auth-email');
const authEmailField = $('#auth-email-field');
const authSubmit = $('#auth-submit');
const authSwitch = $('#auth-switch');
const USERNAME_PATTERN = /^[a-zA-Z0-9_]{3,24}$/;
let authScreenRevision = 0;

function setAuthMessage(message, type = 'error') {
  authMessage.textContent = message;
  authMessage.className = `auth-message ${type}`;
}

function setAuthMode(registering) {
  isRegistering = registering;
  $('#auth-title').textContent = registering ? 'Create your account' : 'Welcome back!';
  $('#auth-intro').textContent = registering
    ? 'Choose a username and add your email to create an account.'
    : 'Sign in to start your spelling adventure.';
  $('#auth-username-label').textContent = registering ? 'Username' : 'Username or email';
  authUsername.autocomplete = 'username';
  authUsername.placeholder = registering ? '3–24 letters, numbers, or underscores' : 'Username or email';
  authUsername.minLength = registering ? 3 : 1;
  authUsername.maxLength = registering ? 24 : 254;
  authEmailField.hidden = !registering;
  authEmail.required = registering;
  authUsername.setCustomValidity('');
  authSubmit.textContent = registering ? 'Create account' : 'Log in';
  authPassword.autocomplete = registering ? 'new-password' : 'current-password';
  authSwitch.textContent = registering
    ? 'Already have an account? Log in'
    : 'New here? Create an account';
  setAuthMessage('');
}

async function updateAuthScreen(user) {
  const revision = ++authScreenRevision;
  if (user) {
    currentProgressUserId=user.id;
    progressLoaded=false;
    progressLoadPromise=null;
    PR=emptyProgress();
    setProgressStatus('Loading your saved levels…');
    ensureUserProgress().catch(error=>console.error('Could not load saved level progress:',error));
    const username = user.user_metadata?.username;
    const accountLabel = $('#account-username');
    accountLabel.textContent = username ? `@${username}` : user.email || 'Signed in';
    shelf();
    show('home');

    if (!username && supabaseClient) {
      const { data: profile, error } = await supabaseClient
        .from('profiles')
        .select('username')
        .eq('id', user.id)
        .maybeSingle();

      if (revision !== authScreenRevision) return;
      if (error) {
        console.error('Could not load the signed-in username:', error.message);
        return;
      }
      if (profile?.username) accountLabel.textContent = `@${profile.username}`;
    }
    return;
  }

  currentProgressUserId=null;
  progressLoaded=false;
  progressLoadPromise=null;
  PR=emptyProgress();
  setProgressStatus('');
  $('#account-username').textContent = '';
  $('#md').classList.remove('on');
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  show('auth');
}

authSwitch.onclick = () => setAuthMode(!isRegistering);
authUsername.addEventListener('input', () => authUsername.setCustomValidity(''));
setAuthMode(false);

authForm.onsubmit = async event => {
  event.preventDefault();
  if (isSubmittingAuth) return;
  if (!supabaseClient) {
    setAuthMessage(
      hasSupabaseConfig
        ? 'Could not load Supabase. Check your internet connection and reload the page.'
        : 'Add your Supabase project URL and publishable key to script.js before signing in.'
    );
    return;
  }

  const formData = new FormData(authForm);
  const usernameOrEmail = String(formData.get('username')).trim();
  const password = String(formData.get('password'));
  const username = usernameOrEmail.toLowerCase();
  const isUsernameLogin = !isRegistering && !usernameOrEmail.includes('@');

  if (isRegistering && !USERNAME_PATTERN.test(usernameOrEmail)) {
    authUsername.setCustomValidity('Use 3–24 letters, numbers, or underscores.');
    authUsername.reportValidity();
    return;
  }

  isSubmittingAuth = true;
  authSubmit.disabled = true;
  authSwitch.disabled = true;
  setAuthMessage(isRegistering ? 'Creating your account…' : 'Signing in…', 'success');

  try {
    let data;
    let error;

    if (isRegistering) {
      const result = await supabaseClient.auth.signUp({
        email: String(formData.get('email')).trim(),
        password,
        options: { data: { username } }
      });
      data = result.data;
      error = result.error;
    } else if (usernameOrEmail.includes('@')) {
      const result = await supabaseClient.auth.signInWithPassword({
        email: usernameOrEmail,
        password
      });
      data = result.data;
      error = result.error;
    } else {
      const result = await supabaseClient.functions.invoke('login-with-username', {
        body: { username, password }
      });
      data = result.data;
      error = result.error;
      if (!error && data?.access_token && data?.refresh_token) {
        const sessionResult = await supabaseClient.auth.setSession({
          access_token: data.access_token,
          refresh_token: data.refresh_token
        });
        data.user = sessionResult.data.user;
        error = sessionResult.error;
      } else if (!error) {
        error = new Error(data?.error || 'Invalid username or password.');
      }
    }

    if (error) throw error;

    if (isRegistering && !data.session) {
      setAuthMessage(
        'Account created. Check your email to confirm your address, then log in.',
        'success'
      );
    } else if (data.user) {
      updateAuthScreen(data.user);
    }
  } catch (error) {
    const message = error.message || 'Authentication failed. Please try again.';
    setAuthMessage(
      isUsernameLogin && error.context?.status === 404
        ? 'Username login is not deployed yet. Follow the setup steps in README.md.'
        : isUsernameLogin && [400, 401].includes(error.context?.status)
        ? 'Invalid username or password.'
        : message
    );
  } finally {
    isSubmittingAuth = false;
    authSubmit.disabled = false;
    authSwitch.disabled = false;
  }
};

$('#sign-out').onclick = async () => {
  if (!supabaseClient) return;
  try {
    const { error } = await supabaseClient.auth.signOut();
    if (error) throw error;
  } catch (error) {
    toast(`Could not log out: ${error.message || 'Please try again.'}`);
  }
};

async function initializeAuth() {
  if (!supabaseClient) {
    setAuthMessage(
      hasSupabaseConfig
        ? 'Could not load Supabase. Check your internet connection and reload the page.'
        : 'Setup required: add your Supabase project URL and publishable key to script.js. Never use a service-role key here.'
    );
    return;
  }

  try {
    const { data, error } = await supabaseClient.auth.getSession();
    if (error) throw error;
    updateAuthScreen(data.session?.user ?? null);
    supabaseClient.auth.onAuthStateChange((_event, session) => {
      updateAuthScreen(session?.user ?? null);
    });
  } catch (error) {
    setAuthMessage(error.message || 'Could not check your sign-in status.');
  }
}

initializeAuth();
