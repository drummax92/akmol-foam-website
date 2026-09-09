import { siteConfig } from "../../lib/site";
import { Button } from "./Button";

const twoGisMapHtml = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 420px;
        overflow: hidden;
        background: #f7f9fb;
      }
    </style>
  </head>

  <body>
    <script charset="utf-8" src="https://widgets.2gis.com/js/DGWidgetLoader.js"></script>

    <script charset="utf-8">
      new DGWidgetLoader({
        "width": "100%",
        "height": 420,
        "borderColor": "#E4EAF0",
        "pos": {
          "lat": 51.13751679784041,
          "lon": 71.54850482940675,
          "zoom": 15
        },
        "opt": {
          "city": "nur_sultan"
        },
        "org": [
          {
            "id": "${siteConfig.twoGisOrgId}"
          }
        ]
      });
    </script>

    <noscript style="color:#c00;font-size:16px;font-weight:bold;">
      Виджет карты использует JavaScript. Включите его в настройках браузера.
    </noscript>
  </body>
</html>
`;

export function TwoGisMap() {
  return (
    <>
      <iframe
        srcDoc={twoGisMapHtml}
        title="Карта 2ГИС — Акмолинские пенопласты"
        className="hidden h-[420px] w-full border-0 lg:block"
        loading="lazy"
      />

      <div className="flex min-h-[300px] flex-col justify-between bg-[linear-gradient(135deg,#EEF5FF_0%,#FFFFFF_48%,#EAF7FF_100%)] p-5 lg:hidden">
        <div>
          <div className="inline-flex rounded-full border border-[#D8E3EE] bg-white/80 px-4 py-2 text-sm font-black text-[#1E6BFF] shadow-sm">
            2ГИС
          </div>

          <h3 className="mt-6 text-2xl font-black tracking-tight text-[#10202E]">
            Как нас найти
          </h3>

          <p className="mt-4 text-sm leading-6 text-[#4A5A68]">
            Откройте компанию в 2ГИС, чтобы посмотреть точку на карте, построить
            маршрут и уточнить расположение.
          </p>

          <p className="mt-5 text-sm font-bold leading-6 text-[#10202E]">
            {siteConfig.address}
          </p>
        </div>

        <Button
          href={siteConfig.twoGisUrl}
          target="_blank"
          rel="noreferrer"
          variant="primary"
          className="mt-6"
        >
          Открыть в 2ГИС
        </Button>
      </div>
    </>
  );
}
