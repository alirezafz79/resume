import React from 'react';
import Image from 'next/image';
import { WorkCardProps } from '../../interfaces/works';
import styles from './styles.module.scss';
import { hardSkill } from '../../interfaces/hardSkills';

const WorkCard = ({ work }: WorkCardProps) => {
	const { date, location, type, title, description, icon, link, jobTitle, hardSkills } = work;
	return (
		<div className={styles.workCard}>
			<div className={styles.top}>
				<header className={styles.header}>
					<span className={styles.date}>{`${date.start} - ${date.finish}`}</span>
					<span className={styles.location}>{`${location ? `${location} - ` : ''}${type}`}</span>
				</header>
				<h5 className={styles.title}>{title}</h5>
				<h6 className={styles.description}>{description}</h6>
				{link ? (
					<div className={styles.linkWrapper}>
						<Image src={icon} width={20} height={20} alt={title} />
						<a className={styles.linkUrl} href={link} target='_blank' rel='noreferrer'>
							{link}
						</a>
					</div>
				) : null}
			</div>
			<div className={styles.bottom}>
				<h5 className={styles.jobTitle}>{jobTitle}</h5>
				{hardSkills.length ? (
					<ul className={styles.hardSkills}>
						{hardSkills.map((hardSkill: hardSkill, index: number) => (
							<li className={styles.hardSkill} key={index}>
								<Image src={hardSkill.icon} width={26} height={26} alt={hardSkill.title} />
								<span className={styles.hardSkillTitle}>{hardSkill.title}</span>
							</li>
						))}
					</ul>
				) : null}
			</div>
		</div>
	);
};

export default WorkCard;
