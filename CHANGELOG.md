# 更改日志 | CHANGE LOG

- [#29](https://github.com/Zuoqiu-Yingyi/widget-drawio/issues/29) 优化资源文件加载方案 | Optimize resource file loading scheme.
- [#23](https://github.com/Zuoqiu-Yingyi/widget-drawio/issues/23) 优化资源文件加载方案 | Optimize resource file loading scheme.
- [#31](https://github.com/Zuoqiu-Yingyi/widget-drawio/issues/31) 修复自定义 URL 参数解析错误问题 | Fixed an issue where custom URL parameters were parsed incorrectly.
- 添加导入本地绘图文件功能 | Add import local drawing file function.
- 修复在新窗口中保存文件后无法正常关闭窗口问题 | Fixed an issue where the window could not be closed normally after saving the file in a new window.
- 优化全局属性 `window.siyuan` 注入方案 | Optimize the global attribute `window.siyuan` injection scheme.
- 更新 draw.io 至 [v22.1.22](https://github.com/jgraph/drawio/releases/tag/v22.1.22) | Update draw.io to [v22.1.22](https://github.com/jgraph/drawio/releases/tag/v22.1.22).
- 新增在新标签页中打开的功能 | Add the function of opening in a new tab.
- 新增 `复制文件引用链接` 与 `复制文件引用地址` 功能 | Add `Copy file reference link` and `Copy file reference address` functions.

## v0.2.0/2023-06-05

- [v0.1.5 <=> v0.2.0](https:///github.com/Zuoqiu-Yingyi/widget-drawio/compare/v0.1.5...v0.2.0)
- [#16](https://github.com/Zuoqiu-Yingyi/widget-drawio/issues/16) 修复使用思源 API `setBlockAttrs` 时设置块属性值为 `null` 时无法设置任何属性的问题 | Fixed an issue where no attributes could be set when setting block attribute values to `null` when using the Siyuan API `setBlockAttrs`.
- [#18](https://github.com/Zuoqiu-Yingyi/widget-drawio/issues/18) Minimal 主题默认隐藏形状面板与格式面板 | The Minimal theme hides the Shapes panel and the Format panel by default.
- 兼容 API `/api/asset/upload` | Compatible with the API `/api/asset/upload`.
  - Adapt: [Issue #7454 · siyuan-note/siyuan](https://github.com/siyuan-note/siyuan/issues/7454)
- 更新 draw.io 至 [v20.8.24](https://github.com/jgraph/drawio/releases/tag/v20.8.24) | Update draw.io to [v20.8.24](https://github.com/jgraph/drawio/releases/tag/v20.8.24).
- 支持保存为 `*.png` 文件 | Support saving as `*.png` file.
- 修复 `siyuan` 插件加载问题 | Fixed the issue of `siyuan` plugin loading.
- 添加思源菜单 | Add Siyuan menu.
- 灯箱模式添加编辑按钮 | Add edit button in lightbox mode.
- 移除仅在非开发模式下加载的文件 | Remove files that are only loaded in non-development mode.
- 中英文文档分离 | Separate Chinese and English documents.
- 调整清单附件内容 | Adjust the content of the manifest file.

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
