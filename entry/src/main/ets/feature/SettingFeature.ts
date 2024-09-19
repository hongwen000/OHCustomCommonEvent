/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import commonEvent from '@ohos.commonEventManager';
import common from '@ohos.app.ability.common';
import consts from '../module/Consts';
import dataPreferences from '@ohos.data.preferences';
import Logger from '../module/Logger';
import surveillanceEventsManager from '../module/SurveillanceEventsManager';

export default class SettingFeature {
  private innerContext: common.UIAbilityContext = null
  private pref: dataPreferences.Preferences = null

  constructor(abilityContext: common.UIAbilityContext) {
    this.innerContext = abilityContext
  }

  async init() {
    await dataPreferences.getPreferences(this.innerContext, consts.DATA_BASE_NAME).then((pref=>{
      this.pref = pref
    })).catch(err=>{
      Logger.info(`getPreferences err ${JSON.stringify(err)}`)
    })
  }

  changeState(group: string, state: number) {
    globalThis.settings.set(group, state);
    let options = {
      isSticky: true,
      parameters: surveillanceEventsManager.getSurveillanceEventStates()
    }
    commonEvent.publish(consts.COMMON_EVENT_SETTING_UPDATE, options, () => {
      Logger.info('success to publish setting update event')
    })
    this.pref.put(group, state).then(() => {
      this.pref.flush()
    })
  }

  checkStateForAlways(group: string): boolean {
    return globalThis.settings.get(group) == consts.ENABLE_STATE_ALWAYS
  }

  checkStateForOnce(group: string): boolean {
    return globalThis.settings.get(group) == consts.ENABLE_STATE_ONCE
  }

  checkStateForNever(group: string): boolean {
    return globalThis.settings.get(group) == consts.ENABLE_STATE_NEVER
  }

  changeStateToAlways(group: string) {
    this.changeState(group, consts.ENABLE_STATE_ALWAYS)
  }

  changeStateToOnce(group: string) {
    this.changeState(group, consts.ENABLE_STATE_ONCE)
  }

  changeStateToNever(group: string) {
    this.changeState(group, consts.ENABLE_STATE_NEVER)
  }
}