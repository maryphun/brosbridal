import dimensions from '../data/images.json';
// A public R2 custom domain can replace the local image directory later.
const base=(import.meta.env.PUBLIC_IMAGE_BASE_URL || '/images').replace(/\/$/,'');
export const imageUrl=(id:string,small=false)=>`${base}/${id}${small?'-small':''}.webp`;
export const imageInfo=(id:string)=>dimensions[id as keyof typeof dimensions] || {width:2000,height:3000,smallWidth:700};
export const imageSrcset=(id:string)=>`${imageUrl(id,true)} ${imageInfo(id).smallWidth}w, ${imageUrl(id)} ${imageInfo(id).width}w`;
