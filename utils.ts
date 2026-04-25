
import { siteConfig } from './siteConfig';

export const getWhatsAppLink = (productName?: string, productUrl?: string) => {
  const baseMsg = `Hi Shriraam Jewellery, I'm interested in this product. Please share details.`;
  const productInfo = productName ? `\n\nProduct: ${productName}` : '';
  const urlInfo = productUrl ? `\nLink: ${productUrl}` : '';
  const encodedMsg = encodeURIComponent(`${baseMsg}${productInfo}${urlInfo}`);
  return `https://wa.me/${siteConfig.whatsapp.replace('+', '')}?text=${encodedMsg}`;
};

export const slugify = (text: string) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
