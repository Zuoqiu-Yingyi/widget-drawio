# 更改日志 | CHANGE LOG

- 修复挂件资源文件显示为未引用问题 | Fixed an issue where the widget resource file appeared to be unreferenced.
- 优先加载 `custom-data-assets` 中设置的资源文件 | Loading of resource files set in `custom-data-assets` takes precedence.
- 资源文件名更改时更新 URL | The URL is updated when the resource file name changes.
- 更新图片资源 URL | Update the image resource URL.

## v0.1.1/2022-02-26

- [v0.1.0 <=> v0.1.1](https:///github.com/Zuoqiu-Yingyi/widget-drawio/compare/v0.1.0...v0.1.1)
- 修复使用 `https` 协议时文件校验不通过问题 | Fixed an issue where file validation failed when using the `https` protocol.
- 修复部分资源文件引用路径问题 | Fixed an issue with some resource file reference paths.

## v0.1.0/2022-02-24

- 自动加载块属性 `custom-data-assets` 中设置的资源文件 | The resource file set in the block attribute `custom-data-assets` is automatically loaded.
- 添加保存到思源按钮 | Add the Save to Source button.
- 显示保存状态 | Displays the saved status.
