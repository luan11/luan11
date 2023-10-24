import { GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';

import { ReactComponent as IllustrationTechnology } from '@/assets/images/illustration-technology.svg';
import { Title } from '@/ui/components/title';

const socialMedias = [
  {
    id: `github`,
    icon: <GithubIcon size={28} />,
    url: `https://github.com/luan11`,
    title: `Github`,
  },
  {
    id: `linkedin`,
    icon: <LinkedinIcon size={28} />,
    url: `https://www.linkedin.com/in/luan-novais11/`,
    title: `LinkedIn`,
  },
  {
    id: `instagram`,
    icon: <InstagramIcon size={28} />,
    url: `https://www.instagram.com/luancode/`,
    title: `Instagram`,
  },
];

const FollowMeComponent = () => (
  <section className="2xl:w-full bg-zinc-800 h-[200px] overflow-hidden -mx-4 2xl:mx-0 px-4 2xl:px-0">
    <div className="container mx-auto flex items-center justify-center sm:justify-end h-full py-6 relative">
      <div className="w-[413px] absolute top-0 -left-3/4 sm:left-0">
        <IllustrationTechnology width="100%" height="100%" />
      </div>

      <div className="flex flex-col gap-4 z-10">
        <Title>follow me</Title>

        <ul className="flex items-center justify-center gap-6 text-stone-100">
          {socialMedias.map(({ id, icon, url, title }) => (
            <li
              key={id}
              className="transition-colors ease-linear hover:text-green-500"
            >
              <a href={url} target="_blank" title={title}>
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default FollowMeComponent;
