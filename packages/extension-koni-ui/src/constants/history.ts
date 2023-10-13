// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ExtrinsicStatus, ExtrinsicType } from '@subwallet/extension-base/background/KoniTypes';
import { detectTranslate } from '@subwallet/extension-base/utils';
import { StatusType } from '@subwallet/extension-koni-ui/Popup/Home/History/Detail';
import { CheckCircle, PaperPlaneTilt, ProhibitInset, Queue, Spinner, StopCircle } from 'phosphor-react';

export const TxTypeNameMap: Record<ExtrinsicType, string> = {
  [ExtrinsicType.TRANSFER_BALANCE]: detectTranslate('Transfer'),
  [ExtrinsicType.TRANSFER_TOKEN]: detectTranslate('Transfer'),
  [ExtrinsicType.TRANSFER_XCM]: detectTranslate('Transfer'),
  [ExtrinsicType.SEND_NFT]: detectTranslate('NFT transaction'),
  [ExtrinsicType.CROWDLOAN]: detectTranslate('Crowdloan contribution'),
  [ExtrinsicType.STAKING_JOIN_POOL]: detectTranslate('Join pool'),
  [ExtrinsicType.STAKING_LEAVE_POOL]: detectTranslate('Leave pool'),
  [ExtrinsicType.JOIN_YIELD_POOL]: detectTranslate('Join pool'),
  [ExtrinsicType.STAKING_BOND]: detectTranslate('Bond'),
  [ExtrinsicType.STAKING_UNBOND]: detectTranslate('Unstake'),
  [ExtrinsicType.STAKING_CLAIM_REWARD]: detectTranslate('Claim reward'),
  [ExtrinsicType.STAKING_WITHDRAW]: detectTranslate('Withdraw'),
  [ExtrinsicType.STAKING_POOL_WITHDRAW]: detectTranslate('Withdraw'),
  [ExtrinsicType.STAKING_CANCEL_UNSTAKE]: detectTranslate('Cancel unstake'),
  [ExtrinsicType.STAKING_COMPOUNDING]: detectTranslate('Stake compound'),
  [ExtrinsicType.STAKING_CANCEL_COMPOUNDING]: detectTranslate('Cancel compound'),
  [ExtrinsicType.EVM_EXECUTE]: detectTranslate('EVM Execute'),
  [ExtrinsicType.MINT_VDOT]: detectTranslate('Mint vDOT'),
  [ExtrinsicType.MINT_LDOT]: detectTranslate('Mint LDOT'),
  [ExtrinsicType.MINT_SDOT]: detectTranslate('Mint sDOT'),
  [ExtrinsicType.MINT_QDOT]: detectTranslate('Mint qDOT'),
  [ExtrinsicType.REDEEM_VDOT]: detectTranslate('Redeem vDOT'),
  [ExtrinsicType.REDEEM_LDOT]: detectTranslate('Redeem LDOT'),
  [ExtrinsicType.REDEEM_SDOT]: detectTranslate('Redeem sDOT'),
  [ExtrinsicType.REDEEM_QDOT]: detectTranslate('Redeem qDOT'),
  [ExtrinsicType.UNKNOWN]: detectTranslate('Unknown')
};

export const StakingTypeNameMap: Record<string, string> = {
  [ExtrinsicType.STAKING_JOIN_POOL]: detectTranslate('Stake'),
  [ExtrinsicType.STAKING_LEAVE_POOL]: detectTranslate('Unstake'),
  [ExtrinsicType.STAKING_BOND]: detectTranslate('Bond'),
  [ExtrinsicType.STAKING_UNBOND]: detectTranslate('Unbond'),
  [ExtrinsicType.STAKING_WITHDRAW]: detectTranslate('Withdraw'),
  [ExtrinsicType.STAKING_COMPOUNDING]: detectTranslate('Compounding')
};

export const HistoryStatusMap: Record<ExtrinsicStatus, StatusType> = {
  [ExtrinsicStatus.SUCCESS]: {
    schema: 'success',
    icon: CheckCircle,
    name: detectTranslate('Completed')
  },
  [ExtrinsicStatus.FAIL]: {
    schema: 'danger',
    icon: ProhibitInset,
    name: detectTranslate('Failed')
  },
  [ExtrinsicStatus.QUEUED]: {
    schema: 'light',
    icon: Queue,
    name: detectTranslate('Queued')
  },
  [ExtrinsicStatus.SUBMITTING]: {
    schema: 'gold',
    icon: PaperPlaneTilt,
    name: detectTranslate('Submitting')
  },
  [ExtrinsicStatus.PROCESSING]: {
    schema: 'gold',
    icon: Spinner,
    name: detectTranslate('Processing')
  },
  [ExtrinsicStatus.CANCELLED]: {
    schema: 'gray',
    icon: StopCircle,
    name: detectTranslate('Cancelled')
  },
  [ExtrinsicStatus.UNKNOWN]: {
    schema: 'danger',
    icon: StopCircle,
    name: detectTranslate('Unknown')
  }
};
