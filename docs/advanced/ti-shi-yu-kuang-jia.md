# 📋 提示语框架

看完基础篇的各种场景介绍后，你应该对提示语有较深的理解。

之前的章节我们讲的都是所谓的「术」，更多地集中讲如何用，但讲「道」的部分不多。高级篇除了会讲更高级的运用外，还会讲更多「道」的部分。

高级篇的开篇，我们来讲一下构成提示语的框架。

## 提示语基本框架

目前有非常多关于 ChatGPT 提示语的框架资料，我们目前觉得写得最清晰的是 Elavis Saravia [总结](https://github.com/dair-ai/Prompt-Engineering-Guide/blob/main/guides/prompts-intro.md)的框架，他认为一个提示语里需包含以下几个元素：

* **指令（必须）：** 即你希望模型执行的具体任务。
* **背景信息（选填）：** 或者说是上下文信息，这可以引导模型做出更好的反应。
* **输入数据（选填）：** 告知模型需要处理的数据。
* **输出指示器（选填）**：告知模型我们要输出的类型或格式。

只要你按照这个框架写提示语 ，模型返回的结果都不会差。

当然，你在写提示语的时候，并不一定要包含所有4个元素，而是可以根据自己的需求排列组合。比如拿前面的几个场景作为例子：

* 推理：指令 + 背景信息 + 输入数据
* 信息提取：指令 + 背景信息 + 输入数据 + 输出指示器

## CRISPE 提示语框架

另一个觉得很不错的 Framework 是 [Matt Nigh](https://github.com/mattnigh/ChatGPT3-Free-Prompt-List) 的 CRISPE框架，这个框架更加复杂，但完备性会比较高，比较适合用于编写提示语模板。CRISPE 分别代表以下含义：

* **CR：** Capacity and Role（能力与角色）。你希望 ChatGPT 扮演怎样的角色。
* **I：** Insight（洞察力），背景信息和上下文。
* **S：** Statement（指令），你希望 ChatGPT 做什么。
* **P：** Personality（个性），你希望 ChatGPT 以什么风格或方式回答你。
* **E：** Experiment（尝试），要求 ChatGPT 为你提供多个答案。

以下是这几个参数的例子：

<table data-header-hidden><thead><tr><th width="145.41666666666669"></th><th></th></tr></thead><tbody><tr><td><strong>Step</strong></td><td><strong>Example</strong></td></tr><tr><td>能力与角色</td><td>把你想象成机器学习框架主题的软件开发专家，以及专业博客作者。</td></tr><tr><td>洞察力</td><td>这个博客的读者主要是有兴趣了解机器学习最新进展技术的专业人士。</td></tr><tr><td>指令</td><td>提供最流行的机器学习框架的全面概述，包括它们的优点和缺点。包括现实生活中的例子，和研究案例，以说明这些框架如何在各个行业中成功地被使用。</td></tr><tr><td>个性</td><td>在回应时，混合使用 Andrej Karpathy、Francois Chollet、Jeremy Howard 和 Yann LeCun 的写作风格。</td></tr><tr><td>尝试</td><td>给我多个不同的例子。</td></tr></tbody></table>

将所有的元素都组合在一起，就变成了这样的提示语，对比基础提示语生成的结果会非常不一样。

<div align="left">

<figure><img src="../.gitbook/assets/01_frame_1.png" alt="" width="563"><figcaption><p>小语GPT提示语框架示例</p></figcaption></figure>

</div>
