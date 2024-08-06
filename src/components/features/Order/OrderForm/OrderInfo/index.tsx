import { Divider } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { useGetProductDetail } from "@/api/hooks/useGetProductDetail";
import { Button } from "@/components/common/Button";
import { Spacing } from "@/components/common/layouts/Spacing";
import type { OrderHistory } from "@/types";

import { HeadingText } from "../Common/HeadingText";
import { LabelText } from "../Common/LabelText";
import { CashReceiptFields } from "../Fields/CashReceiptFields";

type Props = {
  orderHistory: OrderHistory;
};
export const OrderFormOrderInfo = ({ orderHistory }: Props) => {
  const { id, count } = orderHistory;

  const { data: detail } = useGetProductDetail({ productId: id.toString() });
  const totalPrice = detail.price * count;

  return (
    <Wrapper>
      <Title>
        <HeadingText>결제 정보</HeadingText>
      </Title>
      <Divider color="#ededed" />
      <CashReceiptFields />
      <Divider color="#ededed" />
      <ItemWrapper>
        <LabelText>최종 결제금액</LabelText>
        <HeadingText>{totalPrice}원</HeadingText>
      </ItemWrapper>
      <Divider color="#ededed" />
      <ItemWrapper>
        <LabelText>쇼핑포인트 사용</LabelText>
        <PointContainer>
          <PointInput type="text" placeholder="0 P" />
          <UsePointButton>전액사용</UsePointButton>
        </PointContainer>
      </ItemWrapper>
      <Divider color="#ededed" />
      <Spacing height={32} />
      <Button type="submit">{totalPrice}원 결제하기</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-left: 1px solid #ededed;
  border-right: 1px solid #ededed;
  padding: 16px;
`;

const Title = styled.h6`
  padding: 24px 0 20px;
`;

const ItemWrapper = styled.div`
  padding: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PointContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const PointInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin-right: 8px;
  text-align: right; /* 오른쪽 정렬 */
`;

const UsePointButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
