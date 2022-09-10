"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[52684],{53686:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-11ff7dde",path:"/devices/CSM-300ZB_V2.html",title:"ShinaSystem CSM-300ZB_V2 control via MQTT",lang:"en-US",frontmatter:{title:"ShinaSystem CSM-300ZB_V2 control via MQTT",description:"Integrate your ShinaSystem CSM-300ZB_V2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-08-31T11:26:27.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Status (enum)",slug:"status-enum",children:[]},{level:3,title:"People (numeric)",slug:"people-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/CSM-300ZB_V2.md",git:{updatedTime:1662794689e3}}},20782:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var i=a(66252);const d=(0,i.uE)('<h1 id="shinasystem-csm-300zb-v2" tabindex="-1"><a class="header-anchor" href="#shinasystem-csm-300zb-v2" aria-hidden="true">#</a> ShinaSystem CSM-300ZB_V2</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>CSM-300ZB_V2</td></tr><tr><td>Vendor</td><td>ShinaSystem</td></tr><tr><td>Description</td><td>SiHAS multipurpose ToF sensor</td></tr><tr><td>Exposes</td><td>battery, voltage, status, people, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/CSM-300ZB_V2.jpg" alt="ShinaSystem CSM-300ZB_V2"></td></tr></tbody></table><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',3),o=(0,i.Uk)("This device supports OTA updates, for more information see "),s=(0,i.Uk)("OTA updates"),r=(0,i.Uk)("."),n=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="status-enum" tabindex="-1"><a class="header-anchor" href="#status-enum" aria-hidden="true">#</a> Status (enum)</h3><p>Currently status. Value can be found in the published state on the <code>status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>idle</code>, <code>in</code>, <code>out</code>.</p><h3 id="people-numeric" tabindex="-1"><a class="header-anchor" href="#people-numeric" aria-hidden="true">#</a> People (numeric)</h3><p>People count. Value can be found in the published state on the <code>people</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;people&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;people&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),l={},u=(0,a(83744).Z)(l,[["render",function(e,t){const a=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[d,(0,i._)("p",null,[o,(0,i.Wm)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[s])),_:1}),r]),n],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,i]of t)e[a]=i;return e}}}]);