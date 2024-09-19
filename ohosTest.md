# CustomCommonEvent 测试用例归档

## 用例表

|测试功能|预置条件|输入|预期输出|是否自动|测试结果|
|--------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|
|拉起应用|	设备正常运行|		|成功拉起应用|是|Pass|
|监控公共事件| 位于首页 | 1、进入监听页面<br>2、点击**开始监控**<br>3、点击**停止监控** |1、成功进入监控页面<br>2、开始监听，界面显示“当前监听状态”<br>3、停止监控，界面显示“本次监控时长”|是|Pass|
| 查看详情 | 位于监听页面 | 1、点击**查看详情** | 1、进入详情页面，显示监听到的事件 | 是 |Pass|
| 查看历史记录 | 位于首页 | 1、点击**历史** | 1、进入历史界面，展示监控历史记录 | 是 |Pass|
|设置| 位于首页 | 1、点击**设置**<br>2、点击设置是否记录灭屏事件为**仅本次**<br>3、点击设置是否记录亮屏事件为**仅本次** | 1、进入设置页面<br>2、设置成功<br/>3、设置成功 | 是 |Pass|
| 关于 | 位于首页 | 1、点击**关于** | 1、进入关于界面 | 是 |Pass|
| 亮灭屏和锁屏状态监听 | 位于监听页面 | 1、点击**开始监控**<br/>2、点击电源键灭屏、亮屏后解锁<br/>3、点击**停止监控**<br/> | 1、开始监听，界面显示当前监听状态<br/>2、界面中显示最新监听到的事件<br/>3、停止监听，显示本次监控的时长 | 否 |Pass|
| 查看详情 | 位于监听页面<br/>已监听到事件 | 1、点击**查看详情** | 1、进入查看详情页面<br/>2、界面显示监听到的事件和次数。 | 否 |Pass|
