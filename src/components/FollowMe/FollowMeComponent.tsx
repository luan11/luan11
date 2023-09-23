import { GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';

import illustrationTechnologySrc from '@/assets/images/illustration-technology.png';
import { Title } from '@/ui/components/title';

const socialMedias = [
  {
    id: `github`,
    icon: <GithubIcon size={28} />,
    url: `https://github.com/luan11`,
  },
  {
    id: `linkedin`,
    icon: <LinkedinIcon size={28} />,
    url: `https://www.linkedin.com/in/luan-novais11/`,
  },
  {
    id: `instagram`,
    icon: <InstagramIcon size={28} />,
    url: `https://www.instagram.com/luancode/`,
  },
];

const FollowMeComponent = () => (
  <section className="w-full bg-zinc-800 h-[200px] overflow-hidden">
    <div className="container mx-auto flex items-center justify-end h-full py-6 relative">
      <img
        src={illustrationTechnologySrc}
        alt="Illustration Technology"
        className="w-[413px] absolute top-0 left-0"
      />

      <div className="flex flex-col gap-4">
        <Title>follow me</Title>

        <ul className="flex items-center justify-center gap-6 text-stone-100">
          {socialMedias.map(({ id, icon, url }) => (
            <li
              key={id}
              className="transition-colors ease-linear hover:text-green-500"
            >
              <a href={url} target="_blank">
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
