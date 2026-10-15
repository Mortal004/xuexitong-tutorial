---
title: 三、如何安装正确的驱动
---

<PageHero index="03" icon="🧩" title="如何安装正确的驱动" subtitle="Edge / Chrome 驱动下载与配置，解决浏览器相关报错" />

如果在选择默认的“不指定浏览器”的情况下开始刷课，出现了报错，可以更换浏览器，选择 Edge 或者谷歌浏览器：

- 选择 **Edge** 浏览器后，会自动填充驱动地址；
- 选择 **谷歌浏览器** 时不会自动填充，需要手动下载谷歌驱动；
- 若选择 Edge 后仍报错，同样需要重新下载 Edge 驱动。

接下来将分别介绍如何下载 Edge 和谷歌浏览器的驱动，并配置到刷课脚本中。

## 1. 下载 Edge 的驱动

### 1.1 查看浏览器版本号

首先打开 Edge 浏览器，点击右上角三个点，再点击**设置**，然后在设置页面点击**关于 Microsoft Edge**，再查看版本号。

![查看 Edge 版本号](/images/edge-version1.png)

![查看 Edge 版本号](/images/edge-version2.png)

### 1.2 下载对应版本驱动

然后在导航栏粘贴这个链接：

```text
https://developer.microsoft.com/zh-tw/microsoft-edge/tools/webdriver?form=MA13KL#downloads
```

![粘贴链接](/images/zhantielinks.png)

按回车键进入到驱动下载网页，根据浏览器的版本号，并依照你的电脑系统（通常为 `x64`），点击对应的 `x64` 按钮即可开始下载。

![Edge 驱动下载页面](/images/edge-driver.png)

::: tip 版本要对应
驱动的大版本号必须和浏览器版本号**前三位一致**，否则启动时依然会报错。
:::

## 2. 下载谷歌驱动

### 2.1 查看版本号

先查看谷歌浏览器的版本号，操作步骤和 Edge 浏览器一样。

### 2.2 下载对应版本驱动

然后在导航栏粘贴这个链接：

```text
https://googlechromelabs.github.io/chrome-for-testing/
```

::: tip 提示
若无法访问，可能需要开启加速器。
:::

同样根据自己浏览器的版本，找到相应的驱动。页面下方表格中，请选择名称为 `chromedriver` 的项，并根据你的系统（通常为 `win64`）复制对应的链接，打开该链接就会开始下载谷歌驱动。

![谷歌驱动下载页面](/images/chromedriver.png)

## 3. 解压驱动

下载完成后，对压缩包进行解压，打开解压后的文件夹，复制上方的地址。

![复制上方地址](/images/copy.png)

## 4. 在脚本中选择驱动

返回到脚本窗口，在设置页面选择 Edge 或谷歌浏览器，点击“选择文件”，将刚刚复制的驱动地址粘贴到地址栏中并回车，然后双击其中的驱动应用程序：

| 浏览器 | 需要选择的文件 | 常见系统版本 |
| --- | --- | --- |
| Edge | `msedgedriver.exe` | `x64` |
| Chrome | `chromedriver.exe` | `win64` |

![选择驱动](/images/select-driver1.png)

![选择驱动](/images/select-driver2.png)

![选择驱动](/images/select-driver3.png)

## 5. 保存设置

修改好后，保存设置。

::: warning 别忘了这一步
保存后建议先关闭脚本再重新打开，让新的驱动配置生效。
:::

---
