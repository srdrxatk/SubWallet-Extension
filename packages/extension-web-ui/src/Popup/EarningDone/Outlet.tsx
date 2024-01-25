// Copyright 2019-2022 @subwallet/extension-web-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { PageWrapper } from '@subwallet/extension-web-ui/components';
import { DataContext } from '@subwallet/extension-web-ui/contexts/DataContext';
import { ThemeProps } from '@subwallet/extension-web-ui/types';
import CN from 'classnames';
import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

type Props = ThemeProps;

const Component: React.FC<Props> = (props: Props) => {
  const { className } = props;

  const dataContext = useContext(DataContext);

  return (
    <PageWrapper
      className={CN(className, 'page-wrapper')}
      resolve={dataContext.awaitStores(['transactionHistory', 'yieldPool'])}
    >
      <Outlet />
    </PageWrapper>
  );
};

const EarningDoneOutlet = styled(Component)<Props>(({ theme: { token } }: Props) => {
  return {};
});

export default EarningDoneOutlet;
