import { FeedbackBtnList, FeedbackButton } from './FeedbackOptions.styled';
import propTypes from 'prop-types';

export const FeedbackOptions = ({
  handlerGoodBtn,
  handlerNeutralBtn,
  handlerBadBtn,
}) => (
  <FeedbackBtnList>
    <li>
      <FeedbackButton onClick={() => handlerGoodBtn()}>Good</FeedbackButton>
    </li>
    <li>
      <FeedbackButton onClick={() => handlerNeutralBtn()}>
        Neutral
      </FeedbackButton>
    </li>
    <li>
      <FeedbackButton onClick={() => handlerBadBtn()}>Bad</FeedbackButton>
    </li>
  </FeedbackBtnList>
);

FeedbackOptions.propTypes = {
  handlerGoodBtn: propTypes.func.isRequired,
  handlerNeutralBtn: propTypes.func.isRequired,
  handlerBadBtn: propTypes.func.isRequired,
};
