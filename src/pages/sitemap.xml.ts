import {business} from '../data/business';
import {languages,pageKeys,path} from '../i18n';
import {gowns} from '../data/content';
export function GET(){const escape=(s:string)=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');const urls=business.siteUrl?languages.flatMap(l=>[...pageKeys.map(p=>path(l,p)),...gowns.map(g=>path(l,`gowns/${g.id}`))]):[];return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(u=>`<url><loc>${escape(new URL(u,business.siteUrl).href)}</loc></url>`).join('')}</urlset>`,{headers:{'Content-Type':'application/xml'}});}
