import React from 'react';
import {
  HeaderIntroduces,
  HeaderContacts,
  HeaderTitle,
} from '../../utils/headerData';
import styled from '@emotion/styled';

export default function HeaderIntroduce() {
  return (
    <>
      <PrivacyContainer>
        <h1>{HeaderTitle}</h1>
        <PrivacyContactContainer>
          {HeaderContacts.map(contact => (
            <div key={contact._id}>
              <strong>{contact.title}</strong>
              {contact.title.length === 5 ? <>: </> : <>: </>}
              <a href={contact.content}>{contact.content}</a>
            </div>
          ))}
        </PrivacyContactContainer>
      </PrivacyContainer>
      <IntroduceContainer>
        {HeaderIntroduces.map(introduce => (
          <div key={introduce._id}>
            <strong>{introduce.subheading}</strong>
            <div>{introduce.description}</div>
            <br />
          </div>
        ))}
      </IntroduceContainer>
    </>
  );
}

const PrivacyContainer = styled('div')`
  display: flex;
  justify-content: space-between;
`;

const PrivacyContactContainer = styled('div')`
  width: 40%;
`;

const IntroduceContainer = styled('div')`
  margin: 1rem 0 1rem 0;
`;
