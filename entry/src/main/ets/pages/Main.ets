/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 */
import commonEvent from '@ohos.commonEventManager';
import consts from '../module/Consts';
import Logger from '../module/Logger';

@Entry
@Component
struct Main {
  @State btnSrc: Resource = $rawfile('start.png');
  @State btnState: boolean = false;

  private handleStop = () => {
    // 更新按钮状态
    this.btnState = false;
    this.btnSrc = $rawfile('start.png');

    // 发布事件
    let parameters: Record<string, string> = {
      'filePath': '/data/storage/el2/base/haps/entry/files/Pictures/img.jpg'
    };
    let options: commonEvent.CommonEventPublishData = {
      // isOrdered: true,
      parameters: parameters
    };
    commonEvent.publish(consts.COMMON_EVENT_NAME, options, () => {
      Logger.info("成功发布 COMMON_EVENT_FINISH_MEDITATION");
    });
  }

  private executeCallBack = () => {
    this.handleStop();
  }

  build() {
    Stack({ alignContent: Alignment.TopStart }) {
      Flex({ direction: FlexDirection.Column, justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center }) {
        Image(this.btnSrc)
          .id('startMonitor')
          .objectFit(ImageFit.Contain)
          .size({ width: 320, height: 150 })
          .onClick(this.executeCallBack)
      }.size({ width: '100%', height: '100%' })
    }.size({ width: '100%', height: '100%' })
    .backgroundImage($rawfile('vbg720.png'))
    .backgroundImageSize(ImageSize.Contain)
  }
}
