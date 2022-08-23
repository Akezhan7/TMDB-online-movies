import React, { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from 'react'
import style from './Title.module.scss';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';
interface TitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    titleText: string;
    texts?: string[];
    anim: boolean;
}

export const Title = ({texts, anim, titleText,...props}:TitleProps) => {
    const [seconds, setSeconds] = useState(0);
    if (texts) {
        if (seconds >= texts.length) {
            setSeconds (0)
        }
    }

    useEffect(() => {
      if (anim) {
        setInterval(() => {
            setSeconds(seconds => seconds + 1);
          }, 4000);
      }
    }, []);
    
  return (
    <div>
        <div className={style.title}>
            <div className={style.htitle}>{titleText}</div>
            <div className={style.words}>
                {texts && texts.map ((item, num) => 
                    <span key={uuidv4()} className={cn(style.item, {
                        [style.active]: seconds === num
                    })}>{item}</span>
                )}
            </div>
        </div>
        <div className={style.subtitle}>Безопасная, надежная продажа билетов. Ваш билет на живое развлечение!</div>
    </div>
  )
}
//  [styles.primary]: theme == 'primary',