// ExperienceItem.tsx
import { motion } from 'framer-motion';
import { AiTwotoneThunderbolt } from 'react-icons/ai';

interface ExperienceItemProps {
  company: string;
  jobTitle: string;
  jobDuration: string;
  responsibilities: string[];
  companyLink?: string; // Make companyLink optional
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  jobTitle,
  jobDuration,
  responsibilities,
  companyLink,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className='w-full'
    >
      <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
        {jobTitle}{' '}
        {companyLink ? (
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className='text-textColor tracking-wide'
          >
            @{company}
          </a>
        ) : (
          <span className='text-textColor tracking-wide'>@{company}</span>
        )}
      </h3>
      <p className='text=sm mt-1 font-medium text-textDark'>{jobDuration}</p>
      <ul className='mt-6 flex flex-col gap-3'>
        {responsibilities.map((responsibility, index) => (
          <li key={index} className='text-base flex gap-2 text-textDark '>
            <span className='text-textColor mt-1'>
              <AiTwotoneThunderbolt />
            </span>
            {responsibility}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceItem;
