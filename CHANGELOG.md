# 更改日志 | CHANGE LOG

- [#16](https://github.com/Zuoqiu-Yingyi/widget-drawio/issues/16) 修复使用思源 API `setBlockAttrs` 时设置块属性值为 `null` 时无法设置任何属性的问题 | Fixed an issue where no attributes could be set when setting block attribute values to `null` when using the Siyuan API `setBlockAttrs`.
- [#18](https://github.com/Zuoqiu-Yingyi/widget-drawio/issues/18) Minimal 主题默认隐藏形状面板与格式面板 | The Minimal theme hides the Shapes panel and the Format panel by default.

## v0.1.5/2022-05-17

- [v0.1.4 <=> v0.1.5](https:///github.com/Zuoqiu-Yingyi/widget-drawio/compare/v0.1.4...v0.1.5)
- 更新 draw.io 至 [v17.5.1](https://github.com/jgraph/drawio/releases/tag/v17.5.1) | Update draw.io to [v17.5.1](https://github.com/jgraph/drawio/releases/tag/v17.5.1).
- 添加块属性 `data-export-md` 以在导出时显示图片 | Add block attribute `data-export-md` to show image when exporting.

## v0.1.4/2022-03-09

- [v0.1.3 <=> v0.1.4](https:///github.com/Zuoqiu-Yingyi/widget-drawio/compare/v0.1.3...v0.1.4)
- 更新 draw.io 至 [v16.6.5](https://github.com/jgraph/drawio/releases/tag/v16.6.5) | Update draw.io to [v16.6.5](https://github.com/jgraph/drawio/releases/tag/v16.6.5).
- 更新 draw.io 至 [v16.6.6](https://github.com/jgraph/drawio/releases/tag/v16.6.6) | Update draw.io to [v16.6.6](https://github.com/jgraph/drawio/releases/tag/v16.6.6).
- 更新 draw.io 至 [v17.0.0](https://github.com/jgraph/drawio/releases/tag/v17.0.0) | Update draw.io to [v17.0.0](https://github.com/jgraph/drawio/releases/tag/v17.0.0).
- 新建块时跳过储存位置选择对话框 | Skip the storage location selection dialog when creating a new block. REF: [Supported URL parameters: client=1](https://www.diagrams.net/doc/faq/supported-url-parameters#:~:text=client=1).
- 使用自定义块属性 `custom-lightbox`: `1` 设置块为展示模式 | Use the custom block attribute `custom-lightbox`: `1` to set the block to presentation mode. REF: [Supported URL parameters: lightbox=1](https://www.diagrams.net/doc/faq/supported-url-parameters#:~:text=lightbox=1).
- 在 iframe 块中使用时, 弹窗提示无法保存资源文件至思源笔记中 | When used in an iframe block, a pop-up indicates that the resource file cannot be saved to SiYuan Note.

## v0.1.3/2022-03-03

- [v0.1.2 <=> v0.1.3](https:///github.com/Zuoqiu-Yingyi/widget-drawio/compare/v0.1.2...v0.1.3)
- 新增对 `.drawio.svg`, `.drawio.html`, `.drawio.xml` 三种可编辑格式的导出支持 | Added export support for `.drawio.svg`, `.drawio.html`, `.drawio.xml` in three editable formats.
- 优化 URL 参数解析方案 | Optimized URL parameter resolution schemes.
- 将文件扩展名 `.drawio.svg`, `.drawio.html`, `.drawio.xml` 更改为 `.svg`, `.html`, `.xml` | Change the `.drawio.svg`, `.drawio.html`, `.drawio.xml` filename extensions to `.svg`, `.html`, `.xml`.
- 修复保存时文件扩展名重复问题 | Fixed the issue of duplicate file name extensions when saving.
- 移除未使用文件 | Remove unused files.
- 优化资源文件加载过程 | Optimize resource file loading process.
- 更新 draw.io 至 [v16.6.4](https://github.com/jgraph/drawio/releases/tag/v16.6.4) | Update draw.io to [v16.6.4](https://github.com/jgraph/drawio/releases/tag/v16.6.4).
- 离线加载部分依赖文件 | Partially dependent files are loaded offline.

## v0.1.2/2022-03-02

- [v0.1.1 <=> v0.1.2](https:///github.com/Zuoqiu-Yingyi/widget-drawio/compare/v0.1.1...v0.1.2)
- 修复挂件资源文件显示为未引用问题 | Fixed an issue where the widget resource file appeared to be unreferenced.
- 优先加载 `custom-data-assets` 中设置的资源文件 | Loading of resource files set in `custom-data-assets` takes precedence.
- 资源文件名更改时更新 URL | The URL is updated when the resource file name changes.
- 更新图片资源 URL | Update the image resource URL.
- 格式化保存的源文件 | Format the saved source file.

## v0.1.1/2022-02-26

- [v0.1.0 <=> v0.1.1](https:///github.com/Zuoqiu-Yingyi/widget-drawio/compare/v0.1.0...v0.1.1)
- 修复使用 `https` 协议时文件校验不通过问题 | Fixed an issue where file validation failed when using the `https` protocol.
- 修复部分资源文件引用路径问题 | Fixed an issue with some resource file reference paths.

## v0.1.0/2022-02-24

- 自动加载块属性 `custom-data-assets` 中设置的资源文件 | The resource file set in the block attribute `custom-data-assets` is automatically loaded.
- 添加保存到思源按钮 | Add the Save to Source button.
- 显示保存状态 | Displays the saved status.
