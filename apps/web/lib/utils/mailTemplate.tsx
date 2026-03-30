import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { render } from '@react-email/render';

export interface MailTemplateData {
  property: string;
  value: string;
}

export interface MailTemplateProps {
  title: string;
  top: string[][];
  data: MailTemplateData[];
  end: string;
}

const APP_URL =
  process.env.MAIL_APP_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.live_url ||
  'https://ajagunla1.com';

const LOGO_URL = process.env.MAIL_LOGO_URL || 'https://static.ajagunla1.com/images/logo-light.png';

const accent = '#670405';
const bodyText = '#777777';

export const MailTemplate: React.FC<MailTemplateProps> = ({ title, top, data, end }) => {
  return (
    <Html>
      <Head />
      <Preview>{title}</Preview>
      <Body
        style={{
          margin: 0,
          padding: '16px',
          backgroundColor: '#f3f3f3',
          fontFamily:
            "Tahoma, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          color: bodyText,
        }}>
        <Container
          style={{
            backgroundColor: '#ffffff',
            padding: '32px 24px 24px',
            borderRadius: '8px',
            maxWidth: '640px',
          }}>
          <Section
            style={{
              textAlign: 'center',
              marginBottom: '24px',
            }}>
            <Link
              href={APP_URL}
              target="_blank"
              rel="noreferrer noopener"
              style={{
                display: 'inline-block',
                padding: '24px 16px 0',
                textDecoration: 'none',
              }}>
              <Img
                src={LOGO_URL}
                alt="Senator Olubiyi Fadeyi-Ajagunla Official Website"
                width="280"
                style={{
                  display: 'block',
                  margin: '0 auto',
                  maxWidth: '280px',
                  height: 'auto',
                }}
              />
            </Link>
          </Section>

          <Section style={{ marginBottom: '20px' }}>
            <Text
              style={{
                margin: '0 0 16px 0',
                fontSize: '22px',
                fontWeight: 600,
                color: accent,
                textAlign: 'center',
              }}>
              {title}
            </Text>
          </Section>

          <Section style={{ marginBottom: '20px' }}>
            {top.map((group, idx) => (
              <div key={idx} style={{ marginBottom: '12px' }}>
                {group.map((str, innerIdx) => (
                  <Text
                    key={innerIdx}
                    style={{ margin: '0 0 4px 0', fontSize: '13px', lineHeight: '1.6' }}>
                    {str}
                  </Text>
                ))}
              </div>
            ))}
          </Section>

          <Section style={{ marginBottom: '16px' }}>
            {data.map(item => (
              <div key={item.property} style={{ marginBottom: '16px' }}>
                <Text
                  style={{
                    margin: '0 0 4px 0',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: accent,
                  }}>
                  {item.property}
                </Text>
                <hr
                  style={{
                    border: 0,
                    borderTop: '1px solid #fefefe',
                    margin: '0 0 6px 0',
                  }}
                />
                <Text style={{ margin: 0, fontSize: '13px', lineHeight: '1.5' }}>{item.value}</Text>
              </div>
            ))}
          </Section>

          {end ? (
            <Section>
              <Text
                style={{
                  marginTop: '12px',
                  fontStyle: 'italic',
                  color: accent,
                  fontSize: '12px',
                }}>
                {end}
              </Text>
            </Section>
          ) : null}
        </Container>
      </Body>
    </Html>
  );
};

export async function mailTemplate(props: MailTemplateProps): Promise<string> {
  return render(<MailTemplate {...props} />);
}
