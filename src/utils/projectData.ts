const projects = [
  {
    _id: 0,
    header: {
      title: '센터 전용 기록 템플릿 및 링크 관리 서비스',
      period: '2023.07 - 2023.08',
    },
    content: {
      description: `파이헬스케어 사의 통증 관리 전문가들을 위한 올인원 고객 관리 서비스 PoinT의 '센터의 기록 템플릿 관리 및 아카이브 링크 관리 기능' 개발 
       (프론트엔드 개발자 4인 구성)`,
      goal: '기존 태블릿용 어플리케이션으로 제작된 서비스를 자연스러운 사용자 경험을 중심으로 한 웹 최적화된 서비스 제작을 목표로 진행',
      roles: [
        {
          role: '기존 태블릿용 화면을 웹 기반으로 디자인 수정',
          result: [
            '태블릿과 웹 사이의 사용자 경험의 차이를 알고 자연스러운 경험을 제공하기 위해 디자인을 수정'
          ]
        },
        {
          role: '전체 프로젝트 초기 세팅 및 협업을 위한 규칙 생성',
          result: [
            'Husky eslint-stage를 적용해 프로젝트 협업 효율성 증대',
            'package-lock.json 기반의 버전 정보 고정을 도입하여 의존성 버저닝 이슈 방지',
            'Issue template, PR template을 적용해 진행중인 작업 사항을 구체적이고 일관성있게 공유할 수 있는 환경 마련',
          ]
        }, 
        {
          role: '센터 기록 템플릿 생성 기능 구현',
          result: [
            '생성 완료된 템플릿이 메인 화면에 바로 적용되지 않는 문제를 낙관적 업데이트를 통해 사용자 경험 개선',
            '미디어 첨부 버튼 클릭 시 이벤트가 중복으로 발생하는 이슈에 대해 디버깅 진행 및 이벤트 캡쳐링을 확인하고 해결',
            '다양한 형태의 input의 상태를 관리하면서 onBlur를 적절히 활용해 onChange마다 상태를 업데이트하며 발생했던 렌더링 이슈를 개선',
          ]
        }, 
        {
          role: '센터 기록 템플릿 편집 기능 구현',
          result: [
            '추가적인 컴포넌트를 개발하지 않고 이전에 개발된 센터 기록 템플릿 생성 컴포넌트에 코드를 더하는 방식을 선택해 컴포넌트의 본질을 헤쳐 관련된 여러 문제를 경험하였으나, 컴포넌트를 분리해 문제를 개선하고 주제별 명확한 기능을 하는 컴포넌트의 중요성을 인식'
          ]
        },
        {
          role: '전체 프로젝트 리팩토링',
          result: [
            '사용자 피드백(불편한 ui 및 인터렉션) 을 받아 서비스를 개선한 경험',
            '하나의 store 파일 내에서 관리되던 수많은 context를 분리하고 적용하는 리팩토링을 통해 코드의 유지 보수 및 렌더링 이슈를 개선',
          ]
        },
        {
          role: 'UDEMY 주관 프로젝트 캠프 우수상 수여'
        }
      ],
      cooperations: [
        '팀 노션을 통해 일정 및 회의록을 작성하고 관리',
        '코드 리뷰를 적극적으로 활용하여 코드 퀄리티 향상',
        '프로젝트의 전반적인 룰과 흐름을 잡기 위한 회의 주도',
        '적절한 단위의 Issue를 생성하고 PR을 구체적으로 작성해 효율적으로 개발 진행',
        '개발 집중 시간 (평일 1-6시)을 지정해 디스코드에 모여 원활한 소통 및 생산성 확대',

      ],
      stacks: [
        'TypeScript',
        'React',
        'Context API',
        'Axios, SWR, Chakra-ui, Emotion',
      ],
      links: { github: 'https://github.com/pie-sfac/5-17-smokedDuck' },
    },
  },
  {
    _id: 1,
    header: {
      title: '유럽 여행 친구 만들기 커뮤니티',
      period: '2023.01 - 2023.05 ',
    },
    content: {
      description:
        '유럽 여행의 일정에 관련된 정보를 피드에 작성하고 여행 친구를 구할 수 있는 커뮤니티 서비스 (프론트엔드 개발자 4인 구성)',
      goal: `'유럽 여행' 이라는 명확한 주제 속에서 사용자들이 다양한 커뮤니케이션을 진행할 수 있는 서비스 제작을 목표로 진행`,
      roles: [
        {
          role: '자체 회원가입 기능 구현',
          result: [
            'Formik, Yup을 활용함에 따라 하나의 state store 사용으로 간단하게 폼 데이터 핸들링'
          ]
        },
        {
          role: '유저 리스트 조회 및 검색 기능',
          result: [
            '검색어 input의 변화에 따른 api 호출 이슈에 custom debounce 훅을 도입해 과도한 리렌더링 및 성능 저하 해결'
          ]
        },
        {
          role: 'TypeScript 마이그레이션',
          result: [
            'JavaScript로 개발되었던 프로젝트를 TypeScript로 마이그레이션 함에 따라 타입 안정성 확보'
          ]
        }, {
          role: '전체 프로젝트 리팩토링',
          result: [
            'Tanstack-query를 도입해 비동기 로직 개선',
            '근거없이 분리해 구현되어 있던 커스텀 훅에 대해 재사용되지 않는 경우 해당 컴포넌트 내에 작성해 유지 보수할 수 있도록 리팩토링',
          ]
        }
      ],
      cooperations: [
        '팀 노션을 통해 일정 및 회의록을 작성하고 관리',
        '적절한 단위의 Issue를 생성하고 PR을 구체적으로 작성해 효율적으로 개발 진행',
      ],
      stacks: ['TypeScript', 'React', 'Axios, React-query, Recoil, Emotion'],
      links: {
        github: 'https://github.com/prgrms-fe-devcourse/FEDC3_Tripend_JAEHO',
        review:
          'https://velog.io/@jiy7107/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%8D%B0%EB%B8%8C%EC%BD%94%EC%8A%A4-%ED%8C%80%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0',
      },
    },
  },
  {
    _id: 2,
    header: {
      title: '나만의 커스텀 케이크 주문 제작 서비스',
      period: '2023.02 - 2023.03',
    },
    content: {
      description:
        '소비자가 제작하고자 하는 케이크에 관한 정보를 작성해 피드에 올리면 업체가 역으로 제작을 제안하는 서비스 (프론트엔드 개발자 3인, 백엔드 개발자 4인 구성)',
      goal: '일반 사용자와 업주의 역할은 뚜렷하지만 SNS를 사용하듯이 원활하게 제작을 의뢰하고 또 제안할 수 있는 편안한 사용자 경험을 중점으로 한 서비스 제작을 목표로 진행',
      roles: [
        {
          role: '팀 리더를 맡아 전반적인 일정 및 규칙 설정',
        },
        {
          role: '프로젝트 기획 및 디자인'
        },
        {
          role: '소셜 회원가입 및 로그인 기능 구현',
          result: [
            'Client, Authorization server, Resource server 간의 인가 프로세스를 알고 JWT 토큰을 활용해 유효성 검증'
          ]
        },
        {
          role: '일반 사용자 및 업주 마이페이지 기능 구현',
          result:[
            'JWT 토큰 내에 사용자의 정보를 확인하고 유저 특성 별 마이페이지의 형태를 다르게 구현해 제공'
          ]
        },
        {
          role: '업체 정보 등록 기능 구현',
          result: [
            '기본 텍스트, 날짜, 이미지 등과 같은 다양한 형태의 입력값을 관리해야 하는 정보 등록 폼을 생성하기 위해 비제어 컴포넌트 형식으로 데이터를 핸들링하는 React-hook-form을 도입해 렌더링 이슈 개선'
          ]
        }, 
        {
          role: '주문 내역 조회 및 삭제 기능 구현',
          result: [
            '주문 내역 삭제 결과가 화면에 바로 적용되지 않는 문제를 mutate 함수를 적절히 활용해 낙관적 업데이트로 사용자 경험 개선'
          ]
        },
        {
          role: '전체 프로젝트 리팩토링',
          result: [
            '사용자 피드백 (렌더링, 모바일 접근, 불편한 ui)을 받아 서비스를 개선해 2차 배포에서 긍정적인 피드백을 받은 경험'
          ]
        }
      ],
      cooperations: [
        '팀 노션을 통해 일정 및 회의록을 작성하고 관리',
        '코드 리뷰를 적극적으로 활용하여 코드 퀄리티 향상',
        '적절한 단위의 Issue를 생성하고 PR을 구체적으로 작성해 효율적으로 개발 진행',
        '개발 집중 시간 (평일 2-7시)을 지정해 게더타운에 모여 원활한 소통 및 생산성 확대',
      ],
      stacks: [
        'TypeScript',
        'Next.js',
        'Axios, React-query, Chakra-ui, Emotion',
      ],
      links: {
        github: 'https://github.com/prgrms-web-devcourse/team-7sung-heycake-fe',
        review:
          'https://velog.io/@jiy7107/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%8D%B0%EB%B8%8C%EC%BD%94%EC%8A%A4-%EC%B5%9C%EC%A2%85-%ED%8C%80%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0',
      },
    },
  },
];

export { projects };
