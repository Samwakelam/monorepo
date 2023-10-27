import { ReactElement } from 'react';

import { apply, tw } from '@sam/theme/twind';
import { Icon } from '@sam/icons';

import { Button } from '../button';

import { CardProps } from './card.definition';

import * as S from './card.styles';

export const Card = ({
  className,
  children,
  contentClassName,
  cta,
  header,
  icon,
  image,
  imageAsBackground = false,
  showCta = false,
}: CardProps): ReactElement<CardProps> => {
  return (
    <article
      className={tw(S.CardCss, !!header && !!image && S.GridCss)}
      data-label="card"
    >
      <div
        className={tw(S.CardBackingCss({ isFullHeight: !icon && !header }))}
        data-label="card backing"
      />
      <header className={tw(S.HeaderCss, !!header && !!image && S.GridRowOne)}>
        {icon && !header && (
          <>
            <div className={tw(S.IconContainerCss)}>
              <Icon icon={icon.icon} ariaLabel={icon.ariaLabel} />
            </div>
            {icon.detail && (
              <div className={tw(S.DetailContainerCss)}>
                <h3>{icon.detail.title}</h3>
                <p>{icon.detail.description}</p>
              </div>
            )}
          </>
        )}
        {header && <div className={tw(S.ContentHeaderCss)}>{header}</div>}
      </header>
      <article
        className={tw(
          apply(
            S.CardContainerCss,
            !!header && !!image && S.GridRowOneSpanTwo,
            imageAsBackground && S.GridCss,
          ),
          className,
        )}
        onClick={cta?.onClick}
      >
        {image && (
          <img
            src={image.src}
            alt={image.alt}
            className={tw(
              apply(imageAsBackground && [S.GridRowOne, S.BackgroundImageCss]),
              className,
            )}
          />
        )}
        {imageAsBackground && (
          <div className={tw(apply(S.OverlayCss, S.GridRowOne), className)} />
        )}
        {children && (
          <div
            className={tw(
              apply(
                S.ContentCss,
                imageAsBackground && [S.GridRowOne, S.OverlayContentCss],
              ),
              contentClassName,
            )}
          >
            {children}
          </div>
        )}
        {cta && showCta && <Button {...cta} />}
      </article>
    </article>
  );
};
