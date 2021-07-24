import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { LayoutSlot } from "../Layout/Grid";
import { ReactComponent as TestSvg } from "./homepage-test-icon.svg";

export const Homepage = () => {
  const { t } = useTranslation();
  return (
    <LayoutSlot slot="content">
      <Root>
        <WritingsWrapper>
          <Title>{t("MMPI - 2")}</Title>
          <Bar />
          <Subtitle>
            {t("Minnesota Multiphasic Personality Inventory - 2")}
          </Subtitle>
          <Buttons>
            <Link to="/questionnaire">
              <Button size="big" variant="filled">
                {t("Questionnaire")}
              </Button>
            </Link>
            <Link to="/calculator">
              <Button size="big" variant="outlined">
                {t("Calculator")}
              </Button>
            </Link>
          </Buttons>
        </WritingsWrapper>
        <StyledTestSvg />
      </Root>
    </LayoutSlot>
  );
};
export const Root = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 64px;
`;
export const WritingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  margin-right: 48px;

  & > * + * {
    margin-top: 28px;
  }
`;
export const Buttons = styled.div`
  display: flex;
  & > * + * {
    margin-left: 32px;
  }
`;
export const Title = styled.h1`
  font-size: 100px;
  font-weight: bold;
  color: #3a83e2;
  background: -webkit-linear-gradient(180deg, #69bfe3, #194f94);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
  line-height: 1;
`;

export const Bar = styled.div`
  height: 16px;
  width: 18%;
  border-radius: 1000px;
  background-color: ${(p) => p.theme.colors.primary500};
`;
export const Subtitle = styled.p`
  color: ${(p) => p.theme.colors.neutral600};
  font-size: 26px;
  font-weight: bold;
`;
export const StyledTestSvg = styled(TestSvg)``;
