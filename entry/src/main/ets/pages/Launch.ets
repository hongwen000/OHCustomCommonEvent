/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

import common from '@ohos.app.ability.common'
import launchFeature from '../feature/LaunchFeature'

@Entry
@Component
struct Launch {
  private feature :launchFeature = new launchFeature(getContext() as common.UIAbilityContext)

  async onPageShow() {

  }

  build() {
    Column() {
      Image($rawfile('jumpToStart.png'))
        .id('jumpToStart')
        .objectFit(ImageFit.Contain)
        .width(160)
        .height(75)
        .onClick(this.feature.jumpToStart)
        .position({ x: '30%', y: '20%' })
    }
    .backgroundImage($rawfile('vbg720.png'))
    .backgroundImageSize(ImageSize.Contain)
    .width('100%')
    .height('100%')
  }
}