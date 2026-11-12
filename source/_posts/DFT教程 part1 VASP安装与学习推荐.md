---
title: DFT教程①：学习推荐与VASP安装与学习推荐
date: 2026-11-12 10:31:00
tags:
  - 教程
categories:
  - VASP教程
---

## DFT教程①：学习推荐与VASP安装与学习推荐

### 1. 前言

​	在研究生阶段，接触到材料模拟计算的内容，主要涉及DFT、MD的模拟计算。

​	根据我自己的亲身经历来说，如果组里没有相应人员的新生，会经历一段痛苦的学习过程，因此这里我把自己的学习经验和笔记分享给大家。

​	首先，分享DFT计算的内容，以VASP软件为主，其他软件比如Gasussian、VDM、OVITO等也会在后期做出一定分享。

> 大家转载的时候，请附上原文链接，编写不易，尊重原创，谢谢！！
>
> 目录

[TOC]

### 2. 学习推荐

​	这里分享一些我觉得非常有帮助的学习资料：

- 计算化学公社：国内最好的计算化学论坛，很多方向都能找到类似的提问，是一个好的寻找思路和解决方法的论坛，地址：http://bbs.keinsci.com/forum.php
- LVASPTHW：国内大佬攥写的公开VASP教程，基本上涉及到常见的计算任务，是初学者必看的资料，只是最近作者好像在重新整理内容，因此内容还不完全，地址：https://www.bigbrosci.com/zh-cn/latest/
- VASP官方手册：包括参数的解读、计算任务的example等等内容，地址：https://www.vasp.at/wiki/index.php/The_VASP_Manual
- 查找常见小分子晶体结构的网站：https://www.crystallography.net/cod/search.html、https://next-gen.materialsproject.org/materials

### 3. 学习路线

​	学习模拟计算需要的基础：

- Linux系统的简单使用
- python（这个后期才会用，即使不会影响也不大）

​	有了这些基础，推荐用实践来快速学习，而不是学习完相关的理论再去实践。大致学习路线：

- 安装软件，包括VASP、VMD、OVITO等
- DFT计算的任务流程熟悉
- VASP四个输入文件了解
- VASP的INCAR、KPOINTS文件的详细了解
- 编写小案例，了解参数的实际用法
- 分专题开始学习，比如学习吸附能计算、过渡态计算、态密度与能带计算、电荷密度计算等等

​	**另外，在学习过程中，总结出自己遇到的问题和解决办法也非常重要。**

### 4. VASP安装（详细版本）

#### 4.1 说明

​	VASP的安装环境，只能是Linux系统，因此Windows环境下，必须安装虚拟机。

> ps：如果不知道虚拟机的，可以直接百度了解，简单理解就是windows系统里面装一个软件，这个软件里面可以装一个Linux系统

​	这里，我详细说一下安装的流程。

​	我的环境：win10系统 + intel的CPU + 内存16GB

​	**安装流程：**

1. 安装Vmware软件，再安装CentOS系统（这个就是Linux系统）
2. 配置对应环境，并安装VASP软件

​	**必须注意**：软件安装的位置，不要有中文路径，必须全英文。

#### 4.2 Vmware安装

​	这个安装非常简单，我就不说了，安装它就像你用电脑安装微信、qq一样。

​	**安装方法**：去微信公众号搜索Vmware，然后安装给的安装流程去安装就行；也可以去CSDN论坛搜索这个软件的安装，也可以找到。

#### 4.3 CentOS安装

​	我这里采用的CentOS版本是8.5.2111，64位版本。

1. 去阿里云找到对应版本的，然后下载：https://mirrors.aliyun.com/centos/8.5.2111/isos/x86_64/

![1](.\DFT教程 part1 VASP安装与学习推荐\1.png)

2. 打开安装好的Vmware，点击“创建新的虚拟机”，然后使用典型创建即可：

![2](.\DFT教程 part1 VASP安装与学习推荐\2.png)

3. 选择“稍微安装操作系统”：我们等创建完再指定ISO源

<img src=".\DFT教程 part1 VASP安装与学习推荐\3.png" alt="3" style="zoom:50%;" />

4. 选择“Linux”，再选择“Centos8 64位”：

<img src=".\DFT教程 part1 VASP安装与学习推荐\4.png" alt="4" style="zoom:50%;" />

5. 虚拟机名称随意，位置必须全英文：

<img src=".\DFT教程 part1 VASP安装与学习推荐\5.png" alt="5" style="zoom:50%;" />

6. **注意：最大磁盘大小，建议能多给一些就多给一些，因为后续装的东西挺多的，建议至少60GB，也不要怕觉得给太大了会咋样，这个只是划分的空间，实际占据大小会根据真实大小调节，即你只有往centos中装了60GB的东西，才会占据60GB**

<img src=".\DFT教程 part1 VASP安装与学习推荐\6.png" alt="6" style="zoom:50%;" />

7. 这里就完成了创建，然后我们指定ISO路径：

![7](.\DFT教程 part1 VASP安装与学习推荐\7.png)

8. 点击“开启此虚拟机”，开始安装系统
9. 下面我列举一下系统安装流程：

- 鼠标点击进入虚拟机后，想要出来，按“ctrl + alt”
- 每次设置完后，点击左上角的done就可以回到初始设置页面（图片里忘记说了）

![8](.\DFT教程 part1 VASP安装与学习推荐\8.png)

![9](.\DFT教程 part1 VASP安装与学习推荐\9.png)

![10](.\DFT教程 part1 VASP安装与学习推荐\10.png)

![11](.\DFT教程 part1 VASP安装与学习推荐\11.png)

![12](.\DFT教程 part1 VASP安装与学习推荐\12.png)

![13](.\DFT教程 part1 VASP安装与学习推荐\13.png)

![14](.\DFT教程 part1 VASP安装与学习推荐\14.png)

![15](.\DFT教程 part1 VASP安装与学习推荐\15.png)

![16](.\DFT教程 part1 VASP安装与学习推荐\16.png)

10. 完成上面的步骤后，就点击“Begin Installation”，开始安装即可：

![17](.\DFT教程 part1 VASP安装与学习推荐\17.png)

11. 安装完成后，点击右下角重启即可
12. 我们登录，用户名输入root，密码输入刚刚你自己指定的密码（**注意，密码在这里不会显示，输入完成后点击回车即可，因为Linux一般用于服务器，所以密码不会显示，另外小键盘不会启用，除非你按下小键盘的NUMLK SCRLIK**）

![18](.\DFT教程 part1 VASP安装与学习推荐\18.png)

13. 登录成功的标志：

![19](.\DFT教程 part1 VASP安装与学习推荐\19.png)

#### 4.4 XShell安装

​	完成CentOS的安装基本上就啃下了一块硬骨头，大家可以送一口气了，剩下的就是更难的VASP安装了。

​	不过在安装VASP之前，不难发现，默认的Linux界面有点丑，而且文字很小，不好看，所以我们需要另外一个东西，叫做XShell，它可以登录我们的Linux系统，并且自带好看的显示方式，**并且可以快速实现Linux系统文件和windows文件互传。**

​	安装方式非常简单，和Vmware一样，大家自行公众号搜索或者CSDN搜索即可。

​	安装完成后，我们需要连接一下我们的Linux，首先，需要知道我们Linux的IP地址：

- 输入：ip address，查看IP地址，比如下面，我的地址为：192.168.252.135

![20](.\DFT教程 part1 VASP安装与学习推荐\20.png)

- 我们打开xshell软件：文件 -- 新建，打开创建连接窗口

![21](.\DFT教程 part1 VASP安装与学习推荐\21.png)

- 然后输入IP地址、用户名和密码，即可完成登录

![22](.\DFT教程 part1 VASP安装与学习推荐\22.png)

![23](.\DFT教程 part1 VASP安装与学习推荐\23.png)

#### 4.5 配置基本环境与纠错

​	安装VASP，首先需要配置一些基本的环境，包括：

```
gcc、gcc++、gfortran、make、vim
```

​	安装命令：

```
sudo yum install gcc
sudo yum install gcc-c++
sudo yum install gfortran
sudo yum install build-essential --fix-missing 
sudo yum install make
sudo yum install vim
```

​	非常好，执行命令报错：

![24](.\DFT教程 part1 VASP安装与学习推荐\24.png)

​	错误纠结能力是必备的技巧。先百度搜索，发现原因是：2021年12月31日，已经停止了CentOS8的维护，并从官方镜像中移除CentOS 8的所有包，因此导致在使用yum源安装或更新会报上述失败错误。

​	知道错误原因，继续百度搜索纠错方式，找到：https://blog.csdn.net/u013302168/article/details/141923953，这篇文章，开始安装这篇文章所说的进行纠错。

​	再次尝试安装：成功

![25](.\DFT教程 part1 VASP安装与学习推荐\25.png)

​	检测是否安装成功方法：

```
which xxx

--- 不过gcc++，用g++ -v验证即可
```

![26](.\DFT教程 part1 VASP安装与学习推荐\26.png)

#### 4.6 安装intel编译器

​	之所以安装intel编译器，是为了更高效的运行VASP。

​	官网：https://www.intel.cn/content/www/cn/zh/developer/tools/oneapi/toolkits.html。

​	在以前的VASP版本中，一般用的都是2019版本的intel编译器，但是现在我在网上找到的2019版本已经无法正常安装了，总是报错，因此推荐采用新版本的intel编译器，这里我采用的2024版本。

​	官网下载很慢，这里我把我下载的版本放到网盘中，可以自取，也可以去官网下载：

```
链接：https://pan.baidu.com/s/1jSubAhxLHUGuliZrJMs-uA 
提取码：tn74 
```

​	如果官网下载，下载 oneAPI Base Toolkit 和 HPC Toolkit 即可（选择Linux版本、offline installer）。下载完成后，把两个 "xxxxx.sh" 安装文件保存到任意一个文件夹即可。

​	下载完成后，通过xshell中的xftp把文件上传到Linux中，如下：

![27](.\DFT教程 part1 VASP安装与学习推荐\27.png)

​	然后在此文件夹下分别进行安装，命令如下：（**使用管理员权限与否，决定了最终的安装路径是在根目录下，还是用户目录下，没有区别，命令前加上`sudo`表示使用管理员权限，建议采用管理员安装，这样可以保持某些路径一致**）

```
sudo sh xxxx.sh
sudo sh xxxx.sh
```

​	安装的时候，如果你安装了图形界面的Linux系统，会弹出图形界面选项，但是我们采用的命令行界面，因此稍微麻烦一点，需要自己通过键盘来选择。

- oneAPI Base Toolkit 安装中，可以只勾选Math Kernel Library。如果存储空间够大可无脑安装，一步到位。（**用命令行的方式去掉其他库，会出现下面图中的警告，表示这个库是某些库的依赖库，是否要去掉，此时选择keep，即不去掉，先去掉那些不会显示警告的，这样再去掉这些就没事了**）

- HPC Toolkit 安装中，需要勾选 Intel MPlLibrary, Intel oneAPIDPC++/C++ Complier, Intel Fortran Complier 三个库。

  我以Base这个安装为例，给大家演示一下如何使用，而HPC的安装也是同样的操作方式：

![28](.\DFT教程 part1 VASP安装与学习推荐\28.png)

![29](.\DFT教程 part1 VASP安装与学习推荐\29.png)

![30](.\DFT教程 part1 VASP安装与学习推荐\30.png)

![31](.\DFT教程 part1 VASP安装与学习推荐\31.png)

![32](.\DFT教程 part1 VASP安装与学习推荐\32.png)

![33](.\DFT教程 part1 VASP安装与学习推荐\33.png)

![34](.\DFT教程 part1 VASP安装与学习推荐\34.png)

![35](.\DFT教程 part1 VASP安装与学习推荐\35.png)

​	安装完成后，需要激活intel运行环境，输入以下命令（或者添加到 ~/.bashrc 文件里面）：

```
source /opt/intel/oneapi/setvars.sh

## 路径改为自己的路径：对于root用户，也就是用管理员权限运行的安装，默认的安装路径是/opt/intel，否则是~/intel/oneapi/xxx的路径
```

![36](.\DFT教程 part1 VASP安装与学习推荐\36.png)

> 写到 ~/.bashrc 文件，就是写到环境变量中，如下图所示，这样每次打开Linux，会自动执行那个source语句

```
1. 编辑文件：
	sudo vim ~/.bashrc   # 说明：如果没有安装vim，用sudo yum install vim安装即可
2. 写入内容：
	写入 source /opt/intel/oneapi/setvars.sh 即可
	注意：如果不是管理员用户安装，路径应该是~/intel/oneapi/setvars.sh，即写入source ~/intel/oneapi/setvars.sh
3. 保存文件

### 说明； vim用法
	1. 键盘按一下i，进入插入模式，可以编辑输入内容
	2. 按下:，然后左下角会显示":"，接着输入wq即可保存，可以看下图效果
### 如果还不清楚，可以百度搜索vim用法
```

![37](.\DFT教程 part1 VASP安装与学习推荐\37.png)

#### 4.7 编译intel编译器

​	安装完intel编译器后，我们还需要编译。

```
cd /opt/intel/oneapi/mkl/2024.2/share/mkl/interfaces/fftw3xf/   ## 这里也要注意路径，不是管理员，路径不是这个，参考上面路径更改为对应路径即可
make libintel64
```

​	编译完成后，在fftw3xf文件夹里会出现 libfftw3xf_intel.a 文件。

![38](.\DFT教程 part1 VASP安装与学习推荐\38.png)

​	说明：如果上面编译报错，一般是因为icx找不到，此时需要编辑makefile文件，如下所示：

```
1. 用vim打开makefile文件：
	sudo vim makefile
2. 更改下图内容：
	_CC_intel = /opt/intel/oneapi/compiler/2024.2/bin/icx
```

![39](.\DFT教程 part1 VASP安装与学习推荐\39.png)

​	注意检测是否出现libfftw3xf_intel.a，检测是否编译成功。

#### 4.8 安装VASP

​	VASP的安装包需要大家自己获取，因为使用这种软件发论文，必须课题组有相关软件的权限，记得大概5w。（ps：网上可以找到，大家自己用没事，也可以找我，看到会给）

​	安装流程：

1. 解压文件：tar -zxvf vasp.6.3.2.tgz 
2. 进入上述解压后的文件夹，把子目录 arch 中的makefile.include.linux_intel拷（intel 24版本为 makefile.include.intel）到上一级目录下改名为makefile.include。

```
cp arch/makefile.include.intel makefile.include
```

3. 使用 vim 命令修改编译文件 makefile.include（`vim makefile.include`，或者以文本格式打开进行修改），主要修改（原本为icc和icpc，intel 24版本变为了icx和icpx，所以需要修改）：

![40](.\DFT教程 part1 VASP安装与学习推荐\40.png)

​	然后在vasp路径下（比如说你打开VASP解压后的路径，然后右键，选择open in the terminal）开始编译vasp，耗时1小时左右，注意是否报错。

```
# 建议编译使用make std，这样快一点
make std 
make all 也可以
```

​	**这里必须注意点**：遇见`cp vasp 失败，没有文件`之类的报错，其实就是CPU型号不同，因为下载的并行编译器是intel的，所以默认参数指向intel，如果是AMD的话，需要进行参数修改：

```
VASP_TARGET_CPU ?= -xHOST 

---- 如果是AMD的话，改为-xAVX
```

​	编译成功如下：

![41](.\DFT教程 part1 VASP安装与学习推荐\41.png)

​	编译成功后，会在vasp.6.3.2/bin 文件夹中出现 vasp_std、vasp_gam、vasp_ncl 三个文件：（如果只编译了std，那么只有std，**三者的区别在于运行速度等其他微小的区别，最常用的就是vasp_std**）

​	将 vasp_std 重命名为 vasp：

```
mv ./bin/vasp_std ./bin/vasp
```

​		然后，在~/.bashrc 中添加环境变量，即安装完成。(这里添加环境变量和前面方法流程一样，成功的图如下：

```python
##打开.bashrc文件
vim ~/.bashrc
##添加如下信息
export PATH=$PATH:vasp路径/bin  # 注意这里的路径改为自己的安装路径，比如我的路径是：/home/wen/vasp.6.3.2/bin
ulimit -s unlimited
```

![42](.\DFT教程 part1 VASP安装与学习推荐\42.png)

### 5. 测试VASP是否安装成功

​	完成上面所有步骤后，重启虚拟机。

![43](.\DFT教程 part1 VASP安装与学习推荐\43.png)

​	如上图所示，证明安装成功。

### 6. 总结

​	经过上面的流程，就成功安装了VASP，这里我安装的版本6.3.2版本，不同版本会有微小差别，但是基本不大。

​	下面就开始进入基础和实践的讲解，我会尽快更新的。

> ps：再次申明，转载请标明来源，尊重原创，感谢配合！