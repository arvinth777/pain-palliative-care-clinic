'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

const areas = [
  { title: 'Back & spine', image: 'back', description: 'Lower back pain and persistent spinal pain.' },
  { title: 'Knee & joints', image: 'knee', description: 'Joint pain, stiffness and arthritis.' },
  { title: 'Neck & shoulder', image: 'neck', description: 'Pain around the neck and shoulders.' },
  { title: 'Sciatica', image: 'sciatica', description: 'Pain that travels from the back into the leg.' },
  { title: 'Nerve pain', image: 'nerve', description: 'Nerve-related pain affecting the face or limbs.' },
];

export default function PainExplorer() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(0);
  const [active, setActive] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [failed, setFailed] = useState(new Set());
  const loaded = useRef(new Set());

  function select(index, event) {
    setAnimate(event.detail > 0);
    setSelected(index);
    if (loaded.current.has(index)) setActive(index);
  }

  return (
    <div className="clinic-pain-explorer" data-motion={animate ? 'smooth' : 'instant'}>
      <div className="clinic-pain-options" role="group" aria-label={t('Conditions we treat')}>
        {areas.map(({ title, image }, index) => (
          <button key={image} type="button" disabled={failed.has(index)} aria-pressed={selected === index} aria-controls="pain-explorer-detail"
            onFocus={event => event.currentTarget.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'instant' })}
            onClick={event => select(index, event)}>
            <Image src={`/images/pain-carousel/${image}-clinical.webp`} alt="" width={120} height={80} sizes="120px" />
            <span>{t(title)}</span>
            <ArrowUpRight size={20} aria-hidden="true" />
          </button>
        ))}
      </div>
      <div id="pain-explorer-detail" className="clinic-pain-detail" aria-busy={selected !== active}>
        <div className="clinic-pain-images">
          {areas.map(({ title, image }, index) => (
            <Image key={image} src={`/images/pain-carousel/${image}-clinical.webp`}
              alt={t('{area} with the area of pain highlighted in red', { area: t(title) })}
              fill sizes="(max-width: 760px) 100vw, 65vw" aria-hidden={active !== index} data-active={active === index}
              onLoad={() => { loaded.current.add(index); if (selected === index) setActive(index); }}
              onError={() => { setFailed(previous => new Set(previous).add(index)); if (selected === index) setSelected(active); }} />
          ))}
        </div>
        <div className="clinic-pain-description" aria-live="polite" aria-atomic="true">
          <h3>{t(areas[active].title)}</h3>
          <p>{t(areas[active].description)}</p>
        </div>
      </div>
    </div>
  );
}
