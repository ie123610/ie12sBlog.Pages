<iframe src="/script/pdfjs-legacy/web/viewer.html?file=/articles/images/BC-rumor/%E8%8B%B1%E5%B1%9E%E4%BA%8E%E7%BB%B4%E5%90%89%E5%B0%94%E7%BE%A4%E5%B2%9B%E6%B3%A8%E5%86%8C%E6%9C%BA%E6%9E%84%E5%85%AC%E6%8A%A5.pdf" width="100%" height="600px">

</iframe>


<object data="/pdfjs/web/viewer.html?file=/files/manual.pdf" type="text/html" width="100%" height="600px">
  
  {/* 第二层 iframe 的 style 必须改为对象形式 */}
  <iframe 
    src="/pdfjs/web/viewer.html?file=/files/manual.pdf" 
    width="100%" 
    height="600px" 
    style={{ border: 'none' }} 
    loading="lazy"
  >
    
    {/* 最内层的 div style 也必须改为对象形式 */}
    <div style={{ padding: '20px', textAlign: 'center', background: '#fafafa', border: '1px dashed #ccc' }}>
      ⚠️ 无法在线加载阅读器。请 <a href="/files/manual.pdf" target="_blank"><b>点击此处直接打开/下载 PDF 文件</b></a>。
    </div>
    
  </iframe>
</object>
