import styled from '@emotion/styled';
import React from 'react';
import {
  HeaderContacts,
  HeaderIntroduces,
  HeaderTitle,
} from '../../utils/headerData';

export default function HeaderIntroduce() {
  return (
    <HeaderIntroduceContainer>
      <PrivacyContainer>
        <div style={{display: 'flex', alignItems: 'end'}}>
        <h1>{HeaderTitle}</h1> <div style={{marginLeft: '1rem', marginBottom: '1.6rem'}}>Heo ji yeon</div>
        </div>
        <PrivacyContactContainer>
          {HeaderContacts.map(contact => (
            <div key={contact._id}>
              <strong>{contact.title}</strong>
              {contact.title.length === 5 ? <>: </> : <>: </>}
              {
                contact.title === 'Phone' || contact.title ===  'Email' || contact.title === 'Birth'? <>{contact.content}</> : <a href={contact.content}>{contact.content}</a>
              }
              
            </div>
          ))}
        </PrivacyContactContainer>
      </PrivacyContainer>
      <IntroduceContainer>
        {HeaderIntroduces.map(
          introduce =>
            introduce && (
              <div key={introduce._id}>
                {introduce.subheading}
                <br />
              </div>
            ),
        )}
      </IntroduceContainer>
    </HeaderIntroduceContainer>
  );
}

const HeaderIntroduceContainer = styled('div')`
  margin-top: 3rem;
`;

const PrivacyContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PrivacyContactContainer = styled('div')`
  margin-bottom: 1rem;
  width: 40%;
`;

const IntroduceContainer = styled('div')`
  margin: 1rem 0 1rem 0;
`;
