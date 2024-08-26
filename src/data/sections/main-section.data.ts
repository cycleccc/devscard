import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { juejin, github, zhihu, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: '姚龙飞',
  role: '初级前端开发工程师',
  details: [
    { label: '电话', value: '136 6792 7460', url: 'tel:136 6792 7460' },
    { label: '邮箱', value: '29912055448@qq.com', url: 'mailto:2991205548@qq.com' },
    { label: '来自', value: '江西' },
    { label: '薪资要求', value: '11 - 13 K' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '136 6792 7460' },
    { label: 'Email', value: '2991205548@qq.com' },
    { label: 'GitHub', value: 'cycleccc', url: 'https://github.com/cycleccc' },
    { label: '掘金', value: 'cycleccc', url: 'https://juejin.cn/user/3769543078978334' },
    { label: '网站', value: 'cycleccc', url: 'https://cycleccc.github.io/', fullRow: true },
  ],
  description:
    'Lorem ipsum dolor sit amet, consectetur **adipiscing elit**. In sodales ac dui at *vestibulum*. In condimentum metus id dui tincidunt, in blandit mi [vehicula](/). Nulla lacinia, erat sit amet elementum vulputate, lectus mauris volutpat mi, vitae accumsan metus elit ut nunc. Vestibulum lacinia enim eget eros fermentum scelerisque. Proin augue leo, posuere ut imperdiet vitae, fermentum eu ipsum. Sed sed neque sagittis, posuere urna nec, commodo leo. Pellentesque posuere justo vitae massa volutpat maximus.',
  tags: [{ name: 'Open for freelance' }, { name: 'Available for mentoring' }, { name: 'Working on side project' }],
  action: {
    label: '下载简历',
    url: '/cv.pdf',
    downloadedFileName: '前端开发工程师-姚龙飞.pdf',
  },
  links: [
    juejin({ url: 'https://juejin.cn/user/3769543078978334/' }),
    github({ url: 'https://github.com/cycleccc' }),
    zhihu({ url: '#' }),
    twitter({ url: '#' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
