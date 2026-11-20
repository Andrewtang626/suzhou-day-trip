'use strict';
const places = [
 {id:'tianping',name:'天平山',tag:'山林赏枫',icon:'leaf',start:'07:20',end:'10:15',duration:'2 小时 55 分',intro:'穿过古枫林到白云池，再向白云泉方向走一小段山路，原路下山。',path:['南门','御碑楠亭','十景塘','天平山庄','古枫林','白云池','白云泉方向小段登山','返回南门'],tip:'把古枫林和白云池留在前半程。若到达较晚，可缩短白云泉方向的登山段，10:15 回到南门打车。',map:'天平山风景名胜区南门'},
 {id:'mudu',name:'木渎古镇',tag:'沿河老街',icon:'bridge',start:'10:30',end:'11:10',duration:'40 分钟',intro:'顺着河岸逛老街，在小桥上稍作停留，午餐留给一碗蟹粉面。',path:['沿河老街','小桥','木渎午餐'],tip:'这一站只逛公共街巷，按计划跳过收费园林。11:10 左右结束散步，留出找店和用餐的时间。',map:'木渎古镇'},
 {id:'hanshan',name:'寒山寺',tag:'古寺枫桥',icon:'temple',start:'12:30',end:'13:20',duration:'50 分钟',intro:'由寒山寺走到枫桥，沿枫桥古镇一带散步。',path:['寒山寺','枫桥','枫桥古镇一带'],tip:'先看寺院，再往桥边走。13:20 左右从枫桥一带打车去留园。',map:'寒山寺'},
 {id:'liuyuan',name:'留园',tag:'江南园林',icon:'temple',start:'13:35',end:'15:00',duration:'1 小时 25 分',intro:'从古木交柯走向涵碧山房与明瑟楼，赏过冠云峰，再循曲廊出园。',path:['古木交柯','涵碧山房','明瑟楼','冠云峰','曲廊','出口'],tip:'在涵碧山房与明瑟楼一带留时间看水景，随后再去冠云峰。',map:'苏州留园'},
 {id:'huqiu',name:'虎丘',tag:'山寺古塔',icon:'mountain',start:'15:20',end:'16:50',duration:'1 小时 30 分',intro:'自南门拾级而上，经过千人石与剑池，走到云岩寺塔后下山。',path:['南门','断梁殿','试剑石','千人石','剑池','云岩寺塔','下山'],tip:'90 分钟包含上下山。到云岩寺塔后留出下山和走到打车点的时间。',map:'虎丘山风景名胜区南门'},
 {id:'shantang',name:'山塘街',tag:'水巷灯影',icon:'lantern',start:'17:10',end:'18:20',duration:'1 小时 10 分',intro:'沿河慢逛，看天色渐暗、灯影落水，最后步行去山塘街地铁站。',path:['沿河街巷','桥边观景','山塘街地铁站'],tip:'日落和亮灯随日期变化。若到达时天色已暗，就直接欣赏河面灯影，18:20 搭地铁。',map:'山塘街景区'}
];
const lunch={id:'lunch',name:'木渎午餐',tag:'蟹粉面',icon:'bowl',start:'11:10',end:'12:00',duration:'预留 50 分钟',intro:'优先找裕兴记，点一碗蟹粉拌面或秃黄油拌面。',path:['木渎古镇周边选店','蟹粉拌面 / 秃黄油拌面','12:00 出发'],tip:'11:10–12:00 按前后行程推算。先在地图确认当天营业的门店与距离，若排队较长，可就近换家面馆。',map:'木渎 裕兴记'};
function transit(start,end,name,sub,icon,duration){return {start,end,name,sub,icon,duration,type:'交通'};}
const schedule=[
transit('06:06','06:38','上海站 → 苏州站','G3124 · 高铁去程','train','32 分钟'),
transit('06:40','07:20','苏州站 → 天平山','打车 · 前往景区南门','car','40 分钟'),
places[0],transit('10:15','10:30','天平山 → 木渎古镇','打车','car','15 分钟'),places[1],lunch,
transit('12:00','12:30','木渎 → 寒山寺','打车','car','30 分钟'),places[2],
transit('13:20','13:35','枫桥一带 → 留园','打车','car','15 分钟'),places[3],
transit('15:00','15:20','留园 → 虎丘','打车 · 前往虎丘南门','car','20 分钟'),places[4],
transit('16:50','17:10','虎丘 → 山塘街','打车','car','20 分钟'),places[5],
transit('18:20','18:40','山塘街 → 苏州火车站','地铁 2 号线','metro','20 分钟'),
transit('19:25','','苏州站 → 上海站','高铁返程 · 车次、到达时间以车票为准','train','')
];
const notes=[
 ['train','去程衔接','G3124 计划 06:38 到达苏州站，距离 06:40 打车仅 2 分钟。若出站或等车耗时，优先保留古枫林、白云池，缩短登山段。','铁路 12306','https://www.12306.cn/'],
 ['leaf','天平山早入园','2026 年 11 月 14 日至 12 月 6 日，天平山红枫季公布的开园时间为 07:00。其他日期请核对当天开放时段，周末留意景区周边交通管控。','红枫季公告','https://www.szyljt.com/groupDynamics/news/2026-11-13/2133.html'],
 ['bowl','木渎吃面','木渎老街短逛后就近用餐，优先裕兴记。出发前看好营业门店，排队时间计入 50 分钟午餐空档。','在高德查找面馆',mapUrl(lunch.map)],
 ['clock','返程留足时间','18:20 离开山塘街，地铁 2 号线到苏州火车站，计划 18:40 到站，距 19:25 发车有 45 分钟，包含步行、安检与候车。','在高德查看地铁站',mapUrl('山塘街地铁站')],
 ['pin','当天确认','六处景点按计划时段游览。请按实际出行日期确认车票、景区开放及预约情况；各段打车时间均为行程预估。','','']
];
const shapes={
share:'<circle cx="17.5" cy="5" r="2.7"/><circle cx="6" cy="12" r="2.7"/><circle cx="17.5" cy="19" r="2.7"/><path d="m8.4 10.5 6.7-4m-6.7 7 6.7 4"/>',
train:'<rect x="5" y="3" width="14" height="15" rx="3"/><path d="M5 10h14M12 3v7M7 22l3-4m7 4-3-4M8 14h1m6 0h1"/>',
metro:'<rect x="5" y="3" width="14" height="16" rx="5"/><rect x="8" y="6" width="8" height="5" rx="1"/><path d="M8 15h1m6 0h1m-8 7 2-3m6 3-2-3"/>',
car:'<path d="m3 12 2-1 2-5h10l2 5 2 1v6H3zM5 11h14M6 18v2m12-2v2M6 14h2m8 0h2"/>',
pin:'<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.2"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
leaf:'<path d="M20 3C8 3 4 8 5 15c4 7 16 4 15-12ZM3 21 15 9"/>',
mountain:'<path d="m2 20 8-15 5 9 2-4 5 10H2Zm6-10 2 2 2-2"/>',
bridge:'<path d="M2 13h20M3 16c5 0 5-6 9-6s4 6 9 6M4 13v-5m16 5V8M3 20q3-2 6 0t6 0 6 0"/>',
temple:'<path d="M2 9q6 0 10-6 4 6 10 6M4 11h16M6 13v6m4-6v6m4-6v6m4-6v6M3 21h18"/>',
lantern:'<rect x="5" y="6" width="14" height="12" rx="4"/><path d="M9 3h6m-3 0v3m-3 1v10m6-10v10m-6 3h6m-3 0v2"/>',
bowl:'<path d="M3 12h18c-1 5-4 7-9 7s-8-2-9-7Zm5 9h8M12 9l8-6m-5 7 7-4"/>',
route:'<circle cx="6" cy="5" r="2"/><circle cx="18" cy="19" r="2"/><path d="M8 5h8a4 4 0 0 1 0 8H8a3 3 0 1 0 0 6h8"/>',
stamp:'<path d="M8 11c1-2 1-3 1-5a3 3 0 0 1 6 0c0 2 0 3 1 5l3 2v3H5v-3zM4 20h16"/>',
circle:'<circle cx="12" cy="12" r="8.5"/>',check:'<circle cx="12" cy="12" r="8.5"/><path d="m8 12 2.5 2.5 5-5"/>',
book:'<path d="M12 6v14M2 5q5-2 10 1 5-3 10-1v13q-6-2-10 2-5-4-10-2z"/>',
close:'<path d="m6 6 12 12M18 6 6 18"/>',camera:'<path d="M3 7h5l2-3h4l2 3h5v13H3Z"/><circle cx="12" cy="13" r="3.4"/>'
};
function ico(name){return '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">'+(shapes[name]||shapes.pin)+'</svg>';}
function mapUrl(term){return 'https://uri.amap.com/search?'+new URLSearchParams({keyword:term,city:'苏州',view:'list',src:'suzhou-daybook'});}
const $=sel=>document.querySelector(sel);
const modal=$('#modal');
const known=[...places,lunch];
let marked=new Set();
try{const saved=JSON.parse(localStorage.getItem('suzhou-walk-marks')||'[]');marked=new Set(saved.filter(id=>places.some(p=>p.id===id)));}catch{}
let filter='全部',view='itinerary',activeDetail='',toastTimer,assets={};
function flash(message){const box=$('#toast');box.textContent=message;clearTimeout(toastTimer);toastTimer=setTimeout(()=>box.textContent='',2100);}
function markButton(p,compact=false){const on=marked.has(p.id);return '<button class="'+(compact?'check':'action')+'" data-mark="'+p.id+'" aria-pressed="'+on+'" aria-label="'+p.name+'打卡">'+ico(on?'check':'circle')+(compact?'':on?'已打卡':'打卡')+'</button>';}
function pic(p,cls){const a=assets[p.id];return a?'<img class="'+cls+'" src="'+a.file+'" alt="'+p.name+'实景" loading="lazy">':'';}
function drawTimeline(){const rows=schedule.filter(p=>filter==='全部'||filter===(p.type||(p===lunch?'餐饮':'游览')));$('#timeline').innerHTML=rows.map(p=>{
 const plain=p.type==='交通',food=p===lunch;
 const content=plain?'<div class="transit"><span class="small-icon">'+ico(p.icon)+'</span><div class="transit-body"><h3>'+p.name+'</h3><small>'+p.sub+'</small></div><span class="duration">'+p.duration+'</span></div>':
 '<article class="spot-card"><div class="spot-head"><h3>'+p.name+'</h3><span class="tag">'+ico(p.icon)+p.tag+'</span><span class="duration">'+p.duration+'</span></div><div class="spot-inner">'+pic(p,'spot-pic')+'<p>'+p.intro+'</p></div><div class="spot-foot"><button class="action" data-detail="'+p.id+'">'+ico('book')+(food?'用餐安排':'游览路线')+'</button>'+(food?'<a class="action" href="'+mapUrl(p.map)+'" target="_blank" rel="noopener">'+ico('pin')+'查找门店</a>':markButton(p))+'</div></article>';
 return '<div class="time-row '+(plain?'':food?'is-food':'is-place')+'"><div class="time-col"><strong>'+p.start+'</strong>'+(p.end?'<span>'+p.end+'</span>':'')+'</div><div class="rail"><span class="dot"></span></div><div class="segment">'+content+'</div></div>';
 }).join('');}
function drawProgress(){const count=marked.size;$('#progress-text').textContent=count+' / 6 已打卡';$('#progress-bar').style.width=count/6*100+'%';$('#quick-stops').innerHTML=places.map(p=>'<div class="quick">'+markButton(p,true)+'<button class="go" data-detail="'+p.id+'"><span>'+p.name+'</span><time>'+p.start+'</time></button></div>').join('');}
function drawPlaces(){$('#place-grid').innerHTML=places.map(p=>'<article class="place-tile">'+pic(p,'tile-photo')+'<div class="tile-body"><span class="tile-time">'+p.start+' – '+p.end+' · '+p.tag+'</span><h3>'+p.name+'</h3><p>'+p.intro+'</p><div class="tile-actions"><button class="action" data-detail="'+p.id+'">'+ico('book')+'游览路线</button>'+markButton(p)+'</div></div></article>').join('');}
function drawNotes(){$('#note-grid').innerHTML=notes.map(([i,t,b,l,u])=>'<article class="note"><span class="small-icon">'+ico(i)+'</span><h3>'+t+'</h3><p>'+b+'</p>'+(l?'<a href="'+u+'" target="_blank" rel="noopener">'+l+'</a>':'')+'</article>').join('');}
function modalFrame(label,body){$('#modal-inner').innerHTML='<div class="detail"><div class="dialog-top"><span class="section-code">'+label+'</span><button aria-label="关闭" class="close" data-close>'+ico('close')+'</button></div>'+body+'</div>';modal.setAttribute('aria-labelledby','dialog-heading');if(!modal.open){modal.showModal();document.body.classList.add('dialog-open');}}
function details(id){const p=known.find(x=>x.id===id);if(!p)return;activeDetail=id;modalFrame(p.start+' – '+p.end,'<h2 id="dialog-heading">'+p.name+'</h2>'+pic(p,'detail-photo')+'<h4>'+(p===lunch?'用餐安排':'步行顺序')+'</h4><ol class="path-list">'+p.path.map(s=>'<li>'+s+'</li>').join('')+'</ol><p>'+p.tip+'</p><div class="detail-actions"><a class="primary" target="_blank" rel="noopener" href="'+mapUrl(p.map)+'">'+ico('pin')+(p===lunch?'高德查找门店':'高德查看地点')+'</a>'+(p===lunch?'':markButton(p))+'</div>');}
function changeMark(id){if(!places.some(p=>p.id===id))return;marked.has(id)?marked.delete(id):marked.add(id);let saved=true;try{localStorage.setItem('suzhou-walk-marks',JSON.stringify([...marked]));}catch{saved=false;}drawTimeline();drawPlaces();drawProgress();if(modal.open&&activeDetail===id){details(id);modal.querySelector('[data-mark]')?.focus();}flash((marked.has(id)?'已打卡 · ':'已取消打卡 · ')+places.find(p=>p.id===id).name+(saved?'':'（仅本次有效）'));}
function switchView(id,scroll){if(!['itinerary','places','notes'].includes(id))id='itinerary';view=id;document.querySelectorAll('.view').forEach(el=>el.hidden=el.id!==id);document.querySelectorAll('[data-nav]').forEach(el=>el.dataset.nav===id?el.setAttribute('aria-current','page'):el.removeAttribute('aria-current'));if(scroll)$('#guide').scrollIntoView({block:'start'});}
document.addEventListener('click',e=>{const el=e.target.closest('button,a');if(!el)return;
if(el.hasAttribute('data-close')){modal.close();return;}
if(el.dataset.filter){filter=el.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',b===el));drawTimeline();return;}
if(el.dataset.mark){changeMark(el.dataset.mark);return;}
if(el.dataset.detail){e.preventDefault();details(el.dataset.detail);return;}
if(el.dataset.nav||el.classList.contains('brand')){e.preventDefault();const dest=el.dataset.nav||'itinerary';if(location.hash!=='#'+dest)history.pushState(null,'','#'+dest);switchView(dest,true);}
});
window.addEventListener('popstate',()=>switchView(location.hash.slice(1),true));
modal.addEventListener('close',()=>{activeDetail='';document.body.classList.remove('dialog-open');});
modal.addEventListener('click',e=>{if(e.target===modal)modal.close();});
function shareUrl(){const u=new URL(location.href);u.hash='';u.search='';return u.href;}
async function copyUrl(){try{await navigator.clipboard.writeText(shareUrl());return true;}catch{return false;}}
function portableFile(){
 const doc=document.documentElement.cloneNode(true);
 doc.querySelector('#modal').removeAttribute('open');
 doc.querySelector('body').classList.remove('dialog-open');
 for(const id of ['modal-inner','toast','timeline','route-map','quick-stops','place-grid','note-grid','progress-text'])doc.querySelector('#'+id).replaceChildren();
 doc.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.filter==='全部'));
 return new File(['<!doctype html>\n'+doc.outerHTML], '苏州一日漫游.html',{type:'text/html;charset=utf-8'});
}
function downloadGuide(file){
 const url=URL.createObjectURL(file),link=document.createElement('a');
 link.href=url;link.download=file.name;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),15000);
}
$('#share').onclick=async()=>{
 if(document.documentElement.dataset.portable==='true'){
 const file=portableFile();
 if(navigator.canShare?.({files:[file]})){try{await navigator.share({title:'苏州一日漫游',files:[file]});return;}catch(err){if(err.name==='AbortError')return;}}
 modalFrame('SHARE','<h2 id="dialog-heading">分享攻略</h2><p>将完整网页文件发给同行人，用浏览器打开即可查看。行程打卡记录保存在各自的设备上。</p><div class="detail-actions"><button class="primary" id="save-copy">保存可转发的网页</button></div>');
 $('#save-copy').onclick=()=>{downloadGuide(file);modal.close();flash('已生成网页文件');};return;
 }
 const url=shareUrl();if(navigator.share){try{await navigator.share({title:'苏州一日漫游 · 姑苏行记',url});return;}catch(err){if(err.name==='AbortError')return;}}
 const copied=await copyUrl();if(copied){flash('攻略链接已复制，可发给同行人');return;}
 modalFrame('SHARE','<h2 id="dialog-heading">分享攻略</h2><p>复制下面的链接，发给同行人。</p><input id="share-url" aria-label="攻略链接" readonly>');$('#share-url').value=url;$('#share-url').select();};
function drawMap(){
 const nodes=[[44,76,26,56],[70,150,38,175],[158,100,131,125],[210,119,202,144],[207,44,198,27],[275,79,253,58]];
 const streets='<path d="M-12 116 112 52 163-7M15 196 115 127 156 83 222 53 327 27M100 210 158 156 199 97 315 66M179 195l41-62 97-39M254 194l62-44M93-8l16 62 38 36 71 38 98 9M168-5l13 53 65 37 70 6M242-12l-2 46 58 22M49 195l37-46 46 34M110 117l-29-23m41-14 14 27m54-65 18 24m22 22 8-20m36 70 11-26m-31 66-22-36"/>';
 const dots=places.map((p,i)=>{const [x,y,tx,ty]=nodes[i];return '<a href="#'+p.id+'" data-detail="'+p.id+'" aria-label="'+p.name+'游览路线" class="map-link"><circle cx="'+x+'" cy="'+y+'" r="15" fill="transparent"/><circle cx="'+x+'" cy="'+y+'" r="8.5" fill="#3d6650" stroke="#fafaf2" stroke-width="2"/><text x="'+x+'" y="'+(y+3.3)+'" text-anchor="middle" fill="white" font-size="9.5" font-family="Arial" font-weight="600">'+(i+1)+'</text><text x="'+tx+'" y="'+ty+'" font-size="12" font-weight="600" fill="#3f5644" stroke="#f1f3e8" stroke-width="3" paint-order="stroke">'+p.name+'</text></a>';}).join('');
 $('#route-map').innerHTML='<svg class="route-svg" viewBox="0 0 320 191" role="group" aria-label="六站路线示意图，点击地点查看详情"><defs><pattern id="paper" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".52" fill="#a7ae9f" opacity=".23"/></pattern></defs><rect width="320" height="191" fill="#eef1e4"/><path d="M0 0h108q7 26-16 39T63 78Q42 94 0 108z" fill="#dce6d0"/><g stroke="#becfb2" fill="none" opacity=".8"><path d="M-14 80q42-8 49-31t38-23Q96 20 94-5M-14 69q31-5 37-27t40-25Q84 12 81-5M-14 58q28-7 31-24t33-24Q68 4 67-6M-14 92q51-13 58-36t39-22Q108 25 106-5"/></g><g fill="none" stroke="#d1d8c6" stroke-width="6">'+streets+'</g><g fill="none" stroke="#fbfbf2" stroke-width="4">'+streets+'</g><path d="M121 -12q-13 41 26 58t26 43q-10 28 29 52t31 61M324 5q-31 10-35 37t-40 41q-24 15-12 36t-3 38" fill="none" stroke="#c0d8d1" stroke-width="9"/><path d="M121 -12q-13 41 26 58t26 43q-10 28 29 52t31 61" fill="none" stroke="#d6e5df" stroke-width="2"/><rect width="320" height="191" fill="url(#paper)"/><path d="M44 76C32 102 52 136 70 150Q87 158 107 136L147 105Q158 94 170 101l40 18Q235 104 218 79T207 44Q235 36 252 61L275 79" fill="none" stroke="#3d694b" stroke-width="2.7" stroke-dasharray="5 4" stroke-linecap="round"/>'+dots+'</svg>';
}
let credits=[];
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
$('#credits').onclick=()=>{const body=credits.map(a=>'<div class="credit"><b>'+esc(a.title)+'</b><br>'+esc(a.author)+' · <a target="_blank" rel="noopener" href="'+esc(a.licenseUrl)+'">'+esc(a.license)+'</a> · <a target="_blank" rel="noopener" href="'+esc(a.source)+'">原图</a></div>').join('');modalFrame('PHOTO CREDITS','<h2 id="dialog-heading">图像说明</h2><p>封面为 AI 绘制的姑苏水巷旅行插画。路线图按游览顺序绘制，点击站点可打开高德地图查询地点。</p>'+body);};
function init(){document.querySelectorAll('i[data-i]').forEach(i=>i.innerHTML=ico(i.dataset.i));drawMap();drawNotes();drawTimeline();drawProgress();drawPlaces();switchView(location.hash.slice(1),false);}
init();
