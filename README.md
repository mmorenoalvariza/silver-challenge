# Code used to capture the flag:

## Maven dependency:

```xml
<dependency>
  <groupId>org.jsoup</groupId>
  <artifactId>jsoup</artifactId>
  <version>1.10.2</version>
</dependency>
```

## Actual code:

```java
package org.example;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {

        final StringBuilder response = new StringBuilder();
        Document doc = Jsoup.connect("https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge").get();
        doc.select("p").forEach(System.out::println);
        Elements links = doc.select("ul");
        links.forEach(el -> {
            Elements lis = el.select("li");
            lis.forEach(li -> {
                Elements divs = li.select("div");
                divs.forEach(div -> {
                    Elements spans = div.select("span");
                    response.append(spans.first().attr("value"));
                });
            });
        });
        System.out.println(response.toString());
    }
}
```
