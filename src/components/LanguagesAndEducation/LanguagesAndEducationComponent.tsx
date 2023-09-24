import { BookIcon, GraduationCapIcon, LanguagesIcon } from 'lucide-react';
import { Slide } from 'react-awesome-reveal';

import { LanguageOrEducationBox } from '@/ui/components/languageOrEducationBox';
import { Title } from '@/ui/components/title';

const languages = [
  {
    title: `BRAZILIAN PORTUGUESE`,
    proficiency: `NATIVE SPEAKER`,
    customClassName: `text-yellow-400 border-yellow-400`,
  },
  {
    title: `eNGLISH`,
    proficiency: `Intermediate Proficiency`,
    customClassName: `text-red-600 border-red-600`,
  },
];

const education = [
  {
    title: `MBA Software Engineering`,
    formedBy: `impacta`,
    fromTo: `2022 - 2023`,
    customClassName: `text-blue-500 border-blue-500 border-b-4 border-t-0`,
    icon: <GraduationCapIcon size={32} />,
  },
  {
    title: `Analysis and Software Development`,
    formedBy: `Anhanguera University`,
    fromTo: `2017 - 2019`,
    customClassName: `text-orange-500 border-orange-500 border-b-4 border-t-0`,
    icon: <BookIcon size={32} />,
  },
];

const LanguagesAndEducationComponent = () => (
  <section className="container mx-auto grid grid-cols-12 gap-4">
    <div className="pt-6 flex flex-col gap-8 items-center col-start-2 col-end-12 overflow-hidden">
      <Title>Languages & education</Title>

      <Slide direction="left">
        <div className="flex items-center justify-center gap-6">
          {languages.map(({ title, proficiency, customClassName }) => (
            <LanguageOrEducationBox
              key={title}
              className={customClassName}
              title={title}
              leftIcon={<LanguagesIcon size={32} />}
            >
              <p className="text-stone-100">{proficiency}</p>
            </LanguageOrEducationBox>
          ))}
        </div>
      </Slide>

      <Slide direction="right">
        <div className="flex items-center justify-center gap-6 px-3">
          {education.map(
            ({ icon, title, formedBy, fromTo, customClassName }) => (
              <LanguageOrEducationBox
                key={title}
                className={customClassName}
                title={title}
                leftIcon={icon}
              >
                <p className="text-stone-100">{formedBy}</p>
                <p className="text-stone-100 text-xs">{fromTo}</p>
              </LanguageOrEducationBox>
            )
          )}
        </div>
      </Slide>
    </div>
  </section>
);

export default LanguagesAndEducationComponent;
