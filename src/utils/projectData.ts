const projects = [
  {
    _id: 0,
    header: {
      title: '센터 전용 기록 템플릿 및 링크 관리 서비스',
      period: '2023.07 ~ 리팩토링 및 기능 고도화 진행중',
    },
    content: {
      description: `파이헬스케어 사의 통증 관리 전문가들을 위한 올인원 고객 관리 서비스 PoinT의 '센터의 기록 템플릿 관리 및 아카이브 링크 관리 기능' 개발 `,
      goal: '기존 태블릿용 어플리케이션으로 제작된 서비스를 자연스러운 사용자 경험을 중심으로 한 웹 최적화된 서비스 제작을 목표로 진행',
      roles: [
        '프로젝트 기획 및 태블릿 전용 서비스에서 웹 최적화 버전으로의 디자인 수정',
        '전체 프로젝트 초기 세팅',
        '센터의 기록 템플릿 생성 기능 개발',
        '센터의 기록 템플릿 편집 기능 개발',
        '전체 프로젝트 리팩토링',
      ],
      results: [
        'UDEMY 주관 프로젝트 캠프 우수상 수여',
        'Husky eslint-stage를 적용해 프로젝트 협업 효율성 증대',
        'package-lock.json 기반의 버전 정보 고정을 도입해 의존성 버저닝 이슈 방지',
        '하나의 store 파일 내에서 관리되던 수많은 context를 분리해 적용하는 리팩토링을 통해 코드의 유지 보수 및 렌더링 이슈 개선',
        '사용자 피드백을 받아 서비스 개선 경험',
      ],
      cooperations: [
        '팀 노션을 통해 일정 및 회의록을 작성하고 관리',
        '개발 집중 시간 (평일 1-6시)을 지정해 디스코드에 모여 원활한 소통 및 생산성 확대',
        '적절한 단위의 Issue를 생성하고 PR을 구체적으로 작성해 효율적으로 개발 진행',
        '코드 리뷰를 적극적으로 활용하여 코드 퀄리티 향상',
        '프로젝트의 전반적인 룰과 흐름을 잡기 위한 회의 주도',
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
      title: '나만의 커스텀 케이크 주문 제작 서비스',
      period: '2023.02 - 2023.03',
    },
    content: {
      description:
        '소비자가 제작하고자 하는 케이크에 관한 정보를 작성해 피드에 올리면 업체가 역으로 제작을 제안하는 서비스',
      goal: '일반 사용자와 업주의 역할은 뚜렷하지만 SNS를 사용하듯이 원활하게 제작을 의뢰하고 또 제안할 수 있는 편안한 사용자 경험을 중점으로 한 서비스 제작을 목표로 진행',
      roles: [
        '팀 리더를 맡아 전반적인 일정 및 규칙 설정',
        '프로젝트 기획 및 디자인',
        '소셜 회원가입 및 로그인 기능',
        '일반 사용자 및 업주 마이페이지 기능',
        '업체 정보 등록 기능',
        '주문 내역 조회 및 삭제 기능',
      ],
      results: [
        'Oauth2.0 학습 및 JWT 토큰 관리',
        'React-hook-form을 활용한 비제어 컴포넌트 형식의 폼 데이터 핸들링으로 컴포넌트 렌더링 이슈 개선',
        'package-lock.json 기반의 버전 정보 고정을 도입해 의존성 버저닝 이슈 방지',
        '사용자 피드백을 받아 서비스를 개선한 경험',
      ],
      cooperations: [
        '팀 노션을 통해 일정 및 회의록을 작성하고 관리',
        '개발 집중 시간 (평일 2-7시)을 지정해 게더타운에 모여 원활한 소통 및 생산성 확대',
        '적절한 단위의 Issue를 생성하고 PR을 구체적으로 작성해 효율적으로 개발 진행',
        '코드 리뷰를 적극적으로 활용하여 코드 퀄리티 향상',
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
  {
    _id: 2,
    header: {
      title: '유럽 여행 친구 만들기 커뮤니티',
      period: '2023.01 - 2023.05 ',
    },
    content: {
      description:
        '유럽 여행의 일정에 관련된 정보를 피드에 작성하고 여행 친구를 구할 수 있는 커뮤니티 서비스',
      goal: `'유럽 여행' 이라는 명확한 주제 속에서 사용자들이 다양한 커뮤니케이션을 진행할 수 있는 서비스 제작을 목표로 진행`,
      roles: [
        '프로젝트 기획',
        '자체 회원가입 기능',
        '유저 리스트 조회 및 검색 기능',
        'TypeScript 마이그레이션 및 리팩토링',
      ],
      results: [
        'Formik, Yup을 활용한 폼 데이터 핸들링',
        'JavaScript로 개발되었던 프로젝트를 TypeScript로 마이그레이션 함에 따라 타입 안정성 확보',
        'package-lock.json 기반의 버전 정보 고정을 도입해 의존성 버저닝 이슈 방지',
        'React-query 도입 리팩토링으로 코드 개선 및 렌더링 이슈 개선',
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
];

export { projects };
