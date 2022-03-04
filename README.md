# widget-drawio

<center>

[![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/Zuoqiu-Yingyi/widget-drawio?include_prereleases&style=flat-square)](https://github.com/Zuoqiu-Yingyi/widget-drawio/releases/latest)
[![GitHub Release Date](https://img.shields.io/github/release-date/Zuoqiu-Yingyi/widget-drawio?style=flat-square)](https://github.com/Zuoqiu-Yingyi/widget-drawio/releases/latest)
[![GitHub License](https://img.shields.io/github/license/Zuoqiu-Yingyi/widget-drawio?style=flat-square)](https://github.com/Zuoqiu-Yingyi/widget-drawio/blob/main/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/Zuoqiu-Yingyi/widget-drawio?style=flat-square)](https://github.com/Zuoqiu-Yingyi/widget-drawio/commits/main)
![GitHub repo size](https://img.shields.io/github/repo-size/Zuoqiu-Yingyi/widget-drawio?style=flat-square)
![hits](https://hits.b3log.org/Zuoqiu-Yingyi/widget-drawio.svg)
[![GitHub all releases](https://img.shields.io/github/downloads/Zuoqiu-Yingyi/widget-drawio/total?style=flat-square)](https://github.com/Zuoqiu-Yingyi/widget-drawio/releases)

</center>

一个适用于思源笔记的 [draw.io](https://www.diagrams.net/) 挂件  
A [draw.io](https://www.diagrams.net/) widget for Siyuan Notes.

## 预览 | PREVIEW

![preview](./preview.png)


## 功能 | FUNCTION

若想在浏览器中使用该挂件, 请访问 `http(s)://host:port/widgets/drawio/?id=<挂件块ID>`  
To use the widget in your browser, please visit `http(s)://host:port/widgets/drawio/?id=<widget block ID>`.

- 加载与保存 | Load and save.
  - 加载时自动加载块属性 `custom-data-assets` 与 `data-assets` 中设置的资源文件  
    The resource files set in the block attributes `custom-data-assets` and `data-assets` are automatically loaded on load.
  - 使用 `文件` -> `保存` <kbd>Ctrl + S</kbd> 或 `另存为` <kbd>Ctrl + Shift + S</kbd> -> `思源笔记` 保存资源文件至资源文件夹 `data/assets`  
    Use `File` -> `Save` <kbd>Ctrl + S</kbd> or `Save As` <kbd>Ctrl + Shift + S</kbd> -> `Siyuan Note`  to save the resource file to the resource folder `data/assets`.
    - 目前支持保存的格式有 `*.drawio`, `*.svg`, `*.html`, `*.xml`, 均可再次加载并编辑  
      The currently supported save formats are `*.drawio`, `*.svg`, `*.html`, `*.xml`, all of which can be loaded and edited again.
      - `*.svg` 文件可以使用 `插入图片链接` 或 `插入 IFrame 链接` 的形式插入到笔记本的其他位置, 源文件更改时可以同步更新  
        `*.svg` files can be inserted to other locations in the notebook using `Insert image link` or `Insert IFrame link`, and can be updated synchronously when the source files change.
      - `*.html` 文件可以使用 `插入 IFrame 链接` 的形式插入到笔记本的其他位置, 源文件更改时可以同步更新  
        `*.html` files can be inserted to other locations in the notebook using `Insert IFrame link`, and can be updated synchronously when the source files change.
    - 资源文件引用 URL 保存时会更新至块属性 `custom-data-assets` 与 `data-assets`  
      Resource file reference URL are updated to the block attributes `custom-data-assets` and `data-assets` when saved.
    - 文件名更改后保存/另存为动作会新建一个文件, 文件名不更改时保存/另存为动作会更新当前文件  
      The Save/Save As action creates a new file when the file name is changed, and the Save/Save As action updates the current file when the file name is not changed.

## 开始 | START

该挂件已在[思源笔记社区集市](https://github.com/siyuan-note/bazaar)上架, 可直接在集市中安装  
The widget has been put on the shelves at [SiYuan community bazaar](https://github.com/siyuan-note/bazaar) and can be installed directly in the Bazaar.

## 参考 & 感谢 | REFERENCE & THANKS

| 作者 \| Author                          | 项目 \| Project                                   | 许可证 \| License                                                         |
| :-------------------------------------- | :------------------------------------------------ | :------------------------------------------------------------------------ |
| **[JGraph](https://github.com/jgraph)** | [jgraph/drawio](https://github.com/jgraph/drawio) | *[Apache-2.0 License](https://github.com/jgraph/drawio/blob/dev/LICENSE)* |

注: 排序不分先后  
ps: Sort in no particular order.

## 更改日志 | CHANGE LOG

[CHANGE LOG](./CHANGELOG.md)
