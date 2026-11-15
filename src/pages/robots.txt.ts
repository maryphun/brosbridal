import {business} from '../data/business';
export function GET(){return new Response(business.published&&business.siteUrl?`User-agent: *\nAllow: /\nSitemap: ${business.siteUrl.replace(/\/$/,'')}/sitemap.xml\n`:'User-agent: *\nDisallow: /\n',{headers:{'Content-Type':'text/plain'}});}
