import common from '@ohos.app.ability.common';
import commonEvent from '@ohos.commonEventManager';
import consts from '../module/Consts';
import Logger from '../module/Logger';
import router from '@ohos.router';

export default class LaunchFeature {
  private innerContext: common.UIAbilityContext = null;
  private subscriber = null;
  private subscriberLow = null;
  private currentRecordTimes: number = 0;

  constructor(abilityContext: common.UIAbilityContext) {
    this.innerContext = abilityContext;
  }

  private callbackFunc = (error, event) => {
    Logger.info("成功接收到 COMMON_EVENT_FINISH_MEDITATION，在 callbackFunc 中处理。");
    const filePath = event.parameters.filePath;
  }
  private callbackLowFunc = (error, event) => {
    Logger.info("成功接收到 COMMON_EVENT_FINISH_MEDITATION，在 callbackLowFunc 中处理。");
  }


  jumpToStart = () => {
    // subscribe
    if (this.subscriber == null) {
      let highSubscriberInfo = {
        events: [
          consts.COMMON_EVENT_NAME // unordered self defined event
        ],
        // priority: 2 // 2 indicates high priority subscriber
      };
      commonEvent.createSubscriber(highSubscriberInfo, (err, subscriber) => {
        this.subscriber = subscriber
        if (subscriber != null) {
          commonEvent.subscribe(subscriber, this.callbackFunc)
        }
      });
    }
    if (this.subscriberLow == null) {
      let lowSubscriberInfo = {
        events: [
          consts.COMMON_EVENT_NAME // 自定义的无序事件
        ],
      };
      commonEvent.createSubscriber(lowSubscriberInfo, (err, subscriber) => {
        this.subscriberLow = subscriber;
        if (subscriber != null) {
          commonEvent.subscribe(subscriber, this.callbackLowFunc);
        }
      });
    }

    let want = {
      bundleName: 'com.samples.customcommonevent',
      abilityName: 'MainAbility',
    };
    this.innerContext.startAbility(want);
  }
}
