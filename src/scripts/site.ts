import { imageUrl, imageSrcset } from '../lib/media';
const menuButton=document.querySelector<HTMLButtonElement>('.menu-toggle');
const mobileNav=document.querySelector<HTMLElement>('#mobile-nav');
function setMenu(open:boolean){menuButton?.setAttribute('aria-expanded',String(open));if(menuButton)menuButton.setAttribute('aria-label',(open?menuButton.dataset.closeLabel:menuButton.dataset.openLabel)||'Menu');if(mobileNav)mobileNav.hidden=!open;}
function closeMenu(){setMenu(false);}
menuButton?.addEventListener('click',()=>setMenu(menuButton.getAttribute('aria-expanded')!=='true'));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menuButton?.getAttribute('aria-expanded')==='true'){closeMenu();menuButton.focus();}});
window.matchMedia('(min-width:901px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
document.querySelector<HTMLSelectElement>('[data-language-switch]')?.addEventListener('change',e=>{const select=e.currentTarget as HTMLSelectElement;const route=select.dataset.route==='home'?'':`${select.dataset.route}/`;window.location.assign(`/${select.value}/${route}${window.location.search}${window.location.hash}`);});

const catalog=document.querySelector<HTMLElement>('[data-gown-catalog]');
if(catalog){
 const style=catalog.querySelector<HTMLSelectElement>('#style-filter')!;const silhouette=catalog.querySelector<HTMLSelectElement>('#silhouette-filter')!;
 function filterGowns(){let count=0;catalog!.querySelectorAll<HTMLElement>('[data-style]').forEach(item=>{const match=(style.value==='all'||style.value===item.dataset.style)&&(silhouette.value==='all'||silhouette.value===item.dataset.silhouette);item.hidden=!match;if(match)count++;});catalog!.querySelector<HTMLElement>('[data-empty]')!.hidden=count>0;}
 style.addEventListener('change',filterGowns);silhouette.addEventListener('change',filterGowns);
 catalog.querySelector('[data-clear-filters]')?.addEventListener('click',()=>{style.value='all';silhouette.value='all';filterGowns();style.focus();});
}

const portfolio=document.querySelector<HTMLElement>('[data-portfolio]');
if(portfolio){
 const buttons=portfolio.querySelectorAll<HTMLButtonElement>('[data-category]');
 const setCategory=(cat:string)=>{if(!Array.from(buttons).some(b=>b.dataset.category===cat))cat='all';buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.category===cat)));let count=0;portfolio.querySelectorAll<HTMLElement>('[data-categories]').forEach(item=>{const match=cat==='all'||item.dataset.categories?.split(' ').includes(cat);item.hidden=!match;if(match)count++;});portfolio.querySelector('[data-count]')!.textContent=String(count);portfolio.querySelector<HTMLElement>('[data-empty]')!.hidden=count>0;const url=new URL(location.href);if(cat==='all')url.searchParams.delete('collection');else url.searchParams.set('collection',cat);history.replaceState(null,'',url);};
 buttons.forEach(b=>b.addEventListener('click',()=>setCategory(b.dataset.category!)));portfolio.querySelector('[data-clear-filters]')?.addEventListener('click',()=>{setCategory('all');buttons[0].focus();});
 setCategory(new URLSearchParams(location.search).get('collection')||'all');
}

document.querySelectorAll<HTMLButtonElement>('[data-dress-thumb]').forEach(button=>button.addEventListener('click',()=>{const id=button.dataset.dressThumb!;const main=document.querySelector<HTMLButtonElement>('.dress-main')!;const img=main.querySelector('img')!;const thumb=button.querySelector('img')!;img.src=imageUrl(id);img.srcset=imageSrcset(id);img.alt=thumb.alt;main.dataset.image=img.src;document.querySelectorAll('[data-dress-thumb]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));}));

const lightbox=document.querySelector<HTMLDialogElement>('#lightbox');
if(lightbox){
 let items:HTMLButtonElement[]=[];let active=0;let opener:HTMLButtonElement|null=null;
 const photo=lightbox.querySelector<HTMLImageElement>('#lightbox-image')!;
 const prev=lightbox.querySelector<HTMLButtonElement>('.lightbox-prev')!;const next=lightbox.querySelector<HTMLButtonElement>('.lightbox-next')!;
 function show(index:number){active=(index+items.length)%items.length;const item=items[active];photo.src=item.dataset.image!;photo.alt=item.dataset.caption||'';lightbox!.querySelector('#lightbox-caption')!.textContent=photo.alt;lightbox!.querySelector('#lightbox-count')!.textContent=`${active+1} / ${items.length}`;prev.hidden=next.hidden=items.length<2;}
 const close=()=>{if(document.fullscreenElement)document.exitFullscreen().catch(()=>{});lightbox.close();};
 document.querySelectorAll<HTMLButtonElement>('[data-lightbox]').forEach(button=>button.addEventListener('click',()=>{items=Array.from(document.querySelectorAll<HTMLButtonElement>('[data-lightbox]')).filter(b=>!b.closest('[hidden]'));opener=button;show(items.indexOf(button));lightbox.showModal();}));
 lightbox.querySelector('#close-lightbox')?.addEventListener('click',close);prev.addEventListener('click',()=>show(active-1));next.addEventListener('click',()=>show(active+1));
 lightbox.addEventListener('close',()=>opener?.focus());
 lightbox.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();show(active+1);}if(e.key==='ArrowLeft'){e.preventDefault();show(active-1);}});
 lightbox.addEventListener('cancel',()=>{if(document.fullscreenElement)document.exitFullscreen().catch(()=>{});});
 lightbox.querySelector<HTMLButtonElement>('#fullscreen')?.addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else if(lightbox.requestFullscreen)await lightbox.requestFullscreen();}catch{/* The dialog remains usable where fullscreen is unavailable. */}});
 let startX=0;let startY=0;photo.addEventListener('touchstart',e=>{startX=e.changedTouches[0].clientX;startY=e.changedTouches[0].clientY;},{passive:true});photo.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-startX,dy=e.changedTouches[0].clientY-startY;if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy))show(active+(dx<0?1:-1));},{passive:true});
}

const form=document.querySelector<HTMLFormElement>('#enquiry-form');
if(form){
 const today=new Date();const minimum=`${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
 form.querySelectorAll<HTMLInputElement>('input[type=date]').forEach(input=>{input.min=minimum;input.addEventListener('input',()=>{input.setCustomValidity(input.value&&input.value<minimum?form.dataset.dateError||'Choose a future date.':'');});});
 const interest=new URLSearchParams(location.search);const select=form.querySelector<HTMLSelectElement>('#service')!;const selected=interest.get('interest');if(selected&&Array.from(select.options).some(o=>o.value===selected))select.value=selected;
 const dressField=form.querySelector<HTMLInputElement>('#dress-interest')!;
 const dressNames:Record<string,string>=JSON.parse(dressField.dataset.names||'{}');
 const dress=interest.get('dress');if(dress&&Object.hasOwn(dressNames,dress))dressField.value=dress;
 const preview=document.querySelector<HTMLElement>('#enquiry-preview')!;const text=document.querySelector<HTMLTextAreaElement>('#prepared-message')!;
 const invalidatePreview=()=>{preview.hidden=true;text.value='';document.querySelector('#send-whatsapp')?.removeAttribute('href');const status=document.querySelector('#copy-status');if(status)status.textContent='';};
 form.addEventListener('input',invalidatePreview);form.addEventListener('change',invalidatePreview);form.addEventListener('reset',invalidatePreview);
 form.addEventListener('submit',e=>{e.preventDefault();const name=form.querySelector<HTMLInputElement>('#name')!;name.value=name.value.trim();if(!form.reportValidity())return;const data=new FormData(form);const parts=[document.documentElement.lang.startsWith('zh')?'婚礼咨询':document.documentElement.lang.startsWith('ms')?'Pertanyaan perkahwinan':'Bridal consultation'];
 const fields=['name','service','wedding-date','consultation-date','budget','message'];fields.forEach(id=>{const input=form.querySelector<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>(`#${id}`)!;let value=String(data.get(id)||'').trim();if(input instanceof HTMLSelectElement)value=input.selectedOptions[0]?.textContent||'';if(!value)return;const label=form.querySelector(`label[for="${id}"]`)?.childNodes[0]?.textContent?.trim()||id;parts.push(`${label}: ${value}`);});if(data.get('dress')){const field=form.querySelector<HTMLInputElement>('#dress-interest')!;const names:Record<string,string>=JSON.parse(field.dataset.names||'{}');const id=String(data.get('dress'));parts.push(`${field.dataset.label}: ${names[id]||id} (${id})`);}
 text.value=parts.join('\n');const send=document.querySelector<HTMLAnchorElement>('#send-whatsapp');const number=form.dataset.whatsapp||'';if(send&&/^\d{8,15}$/.test(number))send.href=`https://wa.me/${number}?text=${encodeURIComponent(text.value)}`;preview.hidden=false;preview.focus();preview.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth',block:'start'});});
 document.querySelector('#copy-message')?.addEventListener('click',async()=>{const status=document.querySelector('#copy-status')!;try{await navigator.clipboard.writeText(text.value);status.textContent=form.dataset.copied||'Copied';}catch{text.focus();text.select();status.textContent=form.dataset.copyFailed||'Select and copy the message.';}});
}
