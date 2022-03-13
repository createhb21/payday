import { keyframes } from 'styled-components';

export const calendly = 'https://calendly.com/pledge1226';
export const googleForm = 'https://forms.gle/dRKLHwt8vYysG61i7';
export const appStoreLink =
  'https://apps.apple.com/kr/app/%ED%8E%98%EC%9D%B4%EB%8D%B0%EC%9D%B4-payday/id1598231344';

export const aboutUs =
  'https://quilt-psychology-4c4.notion.site/PAYDAY-65e6bf6629004410a9c3810f546e1d05';
export const FrequentlyAsk =
  'https://quilt-psychology-4c4.notion.site/Frequently-Ask-c908329dc3f245d0958c8dac91aaeada';

export const keywords = [
  { id: 0, text: '주휴수당 주 52시간근무제 탄력적' },
  { id: 1, text: '근무제도 유연근무제 연차촉진제' },
  { id: 2, text: '임금체불 연차 월차 반차 월급' },
  { id: 3, text: '주급 시급 폭언 폭행' },
  { id: 4, text: '야간근무 휴일근무' },
  { id: 5, text: '연장근무 성희롱' },
  { id: 6, text: '부당해고' },
  { id: 7, text: '실업급여' },
  { id: 8, text: '* * *' },
];

export const smooth = keyframes`
    0% {
        top: 90%;
        left: -110%;
    }
    50% {
        top: -30%;
        left: 10%;
    }
    100% {
        top: -10%;
        left: -10%;
    }
`;

export const showDown = keyframes`
    from {
      -webkit-text-stroke: 1px #91b1ff;
      -webkit-text-fill-color: ${(props) => props.theme.palette.white};
    }
    to {
      -webkit-text-stroke: #91b1ff;
      -webkit-text-fill-color: #91b1ff;
    }
`;

export const popInFromBottom = keyframes`
0% {
  opacity: 0;
  transform: translateY(100px) scale(0.75);
}
25% {
  opacity: 0.9;
  transform: translateY(2.5px) scale(1.0);
}
50% {
  opacity: 0.9;
  transform: translateY(2.5px) scale(1.0);
}
75% {
  opacity: 0.9;
  transform: translateY(2.5px) scale(1.0);
}
100% {
  opacity: 0;
  transform: translateY(100px) scale(0.75);
}`;
