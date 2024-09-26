"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[3261],{9832:(i,s)=>{s.A=(i,s)=>{const e=i.__vccOpts||i;for(const[i,a]of s)e[i]=a;return e}},4151:(i,s,e)=>{e.r(s),e.d(s,{comp:()=>n,data:()=>t});var a=e(3785);const l={},n=(0,e(9832).A)(l,[["render",function(i,s){return(0,a.uX)(),(0,a.CE)("div",null,s[0]||(s[0]=[(0,a.Fv)('<h2 id="cdn" tabindex="-1"><a class="header-anchor" href="#cdn"><span>CDN</span></a></h2><p>国内服务器带宽限制较高，高带宽按量付费，随着访客数量的增加，费用也会急剧上升。而固定流量宽带，网站打开速度明显变慢。为减少服务器的带宽压力，可将静态文件、图片放在 CDN 上托管，而非服务器上。</p><h3 id="静态文件" tabindex="-1"><a class="header-anchor" href="#静态文件"><span>静态文件</span></a></h3><p>静态文件原本使用公开资源库，但国外库有被不稳定，国内又有时碰上服务崩溃，访问速度慢。最终还是选择自建部署 oss.newzone.top。</p><h3 id="图床" tabindex="-1"><a class="header-anchor" href="#图床"><span>图床</span></a></h3><p>自建图床的成本并不高，只需续费域名就能确保图片的长期保存。我目前使用七牛云配合 Picgo 来搭建图床，每月费用大约十几元。</p><p>曾经尝试过将第三方图床作为临时图床，但仅三天后，图片就全部失效了，导致了大量图片的丢失。这次经历让我深刻认识到，即使是临时需求，也不应依赖第三方图床。</p><h3 id="全站加速" tabindex="-1"><a class="header-anchor" href="#全站加速"><span>全站加速</span></a></h3><p>使用 CDN 全站加速，能实现用户就近访问，不过也存在些问题。</p><ul><li>一个 CDN 只能为一个域名加速，加速的域名即为目标域名。</li><li>CDN 服务商可能要求使用其自有 DNS，比如阿里云。</li><li>如果加速区域选择「全球（不包含中国内地）」。国内用户会访问国外 CDN 节点，而非国内的源站服务器。</li><li>迁移阿里云 DNS 时，注意关闭<strong>静态协议跟随回源，否则会网站重复调整</strong>。</li></ul><h2 id="第三方服务" tabindex="-1"><a class="header-anchor" href="#第三方服务"><span>第三方服务</span></a></h2><h3 id="vercel" tabindex="-1"><a class="header-anchor" href="#vercel"><span>Vercel</span></a></h3><p>Vercel 是一家提供开发、预览和部署网页前端的云平台服务商。它主要用于前端项目，不原生支持 PHP 和 node 项目，每月提供 100G 免费流量。</p><p>如果你的项目超出流量，可以参考 <a href="https://vercel.com/guides/using-cloudflare-with-vercel" target="_blank" rel="noopener noreferrer">How do I use a Cloudflare domain with Vercel?</a>，使用 CloudFlare 进行代理，但需注意检查是否出现过多重定向。在国内可能定位到被屏蔽的 CloudFlare 节点，从而导致有时无法访问。Vercel 现已支持国内电话认证。如流量超出不多，可切换账户部署。</p><h3 id="fly-io" tabindex="-1"><a class="header-anchor" href="#fly-io"><span>fly.io</span></a></h3><p>Fly.io 是一家提供容器化部署的服务商，能根据流量动态调整资源。由于国内无法部署 Google Auth，因此我将认证服务放在 Fly.io 上，使用了两台 shared-cpu-1x@512MB 的机器，每月账单 1.5 刀。但不清楚是不是配置不够，fly.io 的机器很容易报错。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 初次构建</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">fly</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> launch</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 部署，官方建议开两台机器</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">flyctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> deploy</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 将机器内存改为 512</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">fly</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> scale</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> memory</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 512</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 控制机器数量，默认为 2</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">fly</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> scale</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> count</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 无法连接docker，则使用</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">fly</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> wireguard</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> websockets</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cloudflare-tunnel" tabindex="-1"><a class="header-anchor" href="#cloudflare-tunnel"><span>CloudFlare Tunnel</span></a></h3><p>CloudFlare Tunnel 可作为 NAS 的轻量级扩展，一个 Tunnel 能将多个服务托管到不同的子域名。具体部署流程，请参考 <a href="https://sspai.com/post/79278" target="_blank" rel="noopener noreferrer">CloudFlare Tunnel 免费内网穿透的简明教程</a>。需注意，该服务与宝塔的官方 Docker 镜像存在冲突，因此不要同时使用。</p><p>目前，我已通过 CloudFlare Tunnel 部署了 RSS 订阅源、GoogleAuth、PodCast 等服务。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 本地 Dockerfile 架构镜像</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> strapiauth</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 1337:1337</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> strapiauth</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> strapiauth</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># tunnel</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cloudflaretunnel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cloudflare/cloudflared:latest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tunnel</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --no-autoupdate</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --token</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="腾讯云境外" tabindex="-1"><a class="header-anchor" href="#腾讯云境外"><span>腾讯云境外</span></a></h3><p>腾讯云香港已无轻量服务器供应，但可购买新加坡、日本的服务器。价格实惠，2 核 2G，30M 宽带，每月 33 元。但国内连接速度较慢，仅适合境外用户。</p>',23)]))}]]),t=JSON.parse('{"path":"/deploy/CloudServices.html","title":"云计算服务","lang":"zh-CN","frontmatter":{"article":false,"title":"云计算服务","icon":"fa6-solid:cloud-arrow-up","order":2,"description":"CDN 国内服务器带宽限制较高，高带宽按量付费，随着访客数量的增加，费用也会急剧上升。而固定流量宽带，网站打开速度明显变慢。为减少服务器的带宽压力，可将静态文件、图片放在 CDN 上托管，而非服务器上。 静态文件 静态文件原本使用公开资源库，但国外库有被不稳定，国内又有时碰上服务崩溃，访问速度慢。最终还是选择自建部署 oss.newzone.top。 ...","head":[["meta",{"property":"og:url","content":"https://newzone.top/deploy/CloudServices.html"}],["meta",{"property":"og:site_name","content":"LearnData 开源笔记"}],["meta",{"property":"og:title","content":"云计算服务"}],["meta",{"property":"og:description","content":"CDN 国内服务器带宽限制较高，高带宽按量付费，随着访客数量的增加，费用也会急剧上升。而固定流量宽带，网站打开速度明显变慢。为减少服务器的带宽压力，可将静态文件、图片放在 CDN 上托管，而非服务器上。 静态文件 静态文件原本使用公开资源库，但国外库有被不稳定，国内又有时碰上服务崩溃，访问速度慢。最终还是选择自建部署 oss.newzone.top。 ..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-26T06:06:57.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-26T06:06:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"云计算服务\\",\\"description\\":\\"CDN 国内服务器带宽限制较高，高带宽按量付费，随着访客数量的增加，费用也会急剧上升。而固定流量宽带，网站打开速度明显变慢。为减少服务器的带宽压力，可将静态文件、图片放在 CDN 上托管，而非服务器上。 静态文件 静态文件原本使用公开资源库，但国外库有被不稳定，国内又有时碰上服务崩溃，访问速度慢。最终还是选择自建部署 oss.newzone.top。 ...\\"}"]]},"headers":[{"level":2,"title":"CDN","slug":"cdn","link":"#cdn","children":[{"level":3,"title":"静态文件","slug":"静态文件","link":"#静态文件","children":[]},{"level":3,"title":"图床","slug":"图床","link":"#图床","children":[]},{"level":3,"title":"全站加速","slug":"全站加速","link":"#全站加速","children":[]}]},{"level":2,"title":"第三方服务","slug":"第三方服务","link":"#第三方服务","children":[{"level":3,"title":"Vercel","slug":"vercel","link":"#vercel","children":[]},{"level":3,"title":"fly.io","slug":"fly-io","link":"#fly-io","children":[]},{"level":3,"title":"CloudFlare Tunnel","slug":"cloudflare-tunnel","link":"#cloudflare-tunnel","children":[]},{"level":3,"title":"腾讯云境外","slug":"腾讯云境外","link":"#腾讯云境外","children":[]}]}],"git":{"createdTime":1727330817000,"updatedTime":1727330817000,"contributors":[{"name":"FantasyFish","email":"115795377+FantasyFish@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.05,"words":916},"filePathRelative":"deploy/CloudServices.md","localizedDate":"2024年9月26日","excerpt":"<h2>CDN</h2>\\n<p>国内服务器带宽限制较高，高带宽按量付费，随着访客数量的增加，费用也会急剧上升。而固定流量宽带，网站打开速度明显变慢。为减少服务器的带宽压力，可将静态文件、图片放在 CDN 上托管，而非服务器上。</p>\\n<h3>静态文件</h3>\\n<p>静态文件原本使用公开资源库，但国外库有被不稳定，国内又有时碰上服务崩溃，访问速度慢。最终还是选择自建部署 oss.newzone.top。</p>\\n<h3>图床</h3>\\n<p>自建图床的成本并不高，只需续费域名就能确保图片的长期保存。我目前使用七牛云配合 Picgo 来搭建图床，每月费用大约十几元。</p>\\n<p>曾经尝试过将第三方图床作为临时图床，但仅三天后，图片就全部失效了，导致了大量图片的丢失。这次经历让我深刻认识到，即使是临时需求，也不应依赖第三方图床。</p>","autoDesc":true}')}}]);