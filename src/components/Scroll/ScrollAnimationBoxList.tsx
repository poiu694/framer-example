import styled from '@emotion/styled';
import ScrollAnimationBox from './ScrollAnimationBox';

const foods: [string, number, number][] = [
  ['🍅', 340, 10],
  ['🍊', 20, 40],
  ['🍋', 60, 90],
  ['🍐', 80, 120],
  ['🍏', 100, 140],
  ['🫐', 205, 245],
  ['🍆', 260, 290],
  ['🍇', 290, 320],
];

function ScrollAnimationBoxList() {
  return (
    <Wrapper>
      {foods.map(([emoji, hueA, hueB], idx) => (
        <ScrollAnimationBox key={idx} emoji={emoji} hueA={hueA} hueB={hueB} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: block;
  margin-bottom: 200px;
`;

export default ScrollAnimationBoxList;
