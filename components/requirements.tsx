import {
  Monitor,
  Scan,
  Server,
  Network,
  Printer,
  Battery,
  ExternalLink,
  Code2,
  Terminal,
  BrainCircuit,
  CircuitBoard,
  Cpu,
} from 'lucide-react'

export function Requirements() {
  const hardware = [
    { icon: Monitor, name: 'Puestos de Cobro (TPV)', specs: 'Ryzen 3, 8GB RAM, 240GB SSD', qty: 16, price: '$467.000 c/u', link: 'https://www.maximus.com.ar/Producto/Monitor-LED-19-PERFORMANCE-PF185R---HDMIVGA-60hz/ITEM=19705/maximus.aspx?PN=PF185R'},
    { icon: Scan, name: 'Lectores Código de Barras', specs: '23 escáneres laser 2D/QR inalámbricos', qty: 23, price: '$38.400 c/u', link: 'https://casaschettini-shop.com/productos/nitcom-6200-lector-de-codigos-de-barras-2d-qr-dni-usb-scaner-con-base-de-apoyo/' },
    { icon: Server, name: 'Servidor Centralizado', specs: 'LENOVO THINKSYSTEM SR650 V4 Intel Xeon', qty: 1, price: '$9.288.692',link: 'https://tienda.datahaus.com.ar/products/servidor-lenovo-thinksystem-sr650-v4-intel-xeon-performance-6515p-16c-72mb-128gb-truddr5-6400mhz-raid-9350-8i-2gb-m-2-b340i-2i-nvme-2x480gb-ri-nvme-10gbase-t-2-port-ocp-2x-800w-xclarity-xcc3-premier-3yr-on-site'},
    { icon: Network, name: 'Routers VPN', specs: 'TP-Link Omada ER605 Gigabit Ethernet', qty: 4, price: '$100.000 c/u', link: 'https://www.mercadolibre.com.ar/router-vpn-gigabit-tp-link-omada-er605-gris/p/MLA18371309?pdp_filters=item_id%3AMLA2847637510&from=gshop&matt_tool=73566853&matt_word=&matt_source=google&matt_campaign_id=23390549168&matt_ad_group_id=199229762308&matt_match_type=&matt_network=g&matt_device=c&matt_creative=790066494602&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735113679&matt_product_id=MLA18371309-product&matt_product_partition_id=2454528869414&matt_target_id=aud-2418879895625:pla-2454528869414&cq_src=google_ads&cq_cmp=23390549168&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=23390549168&gbraid=0AAAAAD01zQbfPkB7sE3mb2WJe7tpsYlgp&gclid=CjwKCAjw6f3RBhApEiwAMaCqWdToIxPzgouIAaL0D8SCDvXLhCTnA3hVdR3iiV8jX1N4WUtl_9c9cxoCIUcQAvD_BwE'},
    { icon: Printer, name: 'Ticketeras Térmicas', specs: 'Nictom IT04 — impresión 250 mm/s', qty: 16, price: '$100.000 c/u', link: 'https://www.mercadolibre.com.ar/impresora-termica-100-mm-comandera-it04-negra-nictom-color-negro/p/MLA44611931?product_trigger_id=MLA44605513&pdp_filters=item_id%3AMLA2134063096&applied_product_filters=MLA44605513&picker=true&quantity=1'},
    { icon: Battery, name: 'Sistemas UPS', specs: '3000VA con regulación automática', qty: 5, price: '$324.000 c/u', link: 'https://www.todoseguridad.ar/productos/hikvision-ds-ups3000-3000va-1t6fs/'},
  ]

  const software = [
    { name: 'MySQL Enterprise', type: 'Base de Datos', purpose: 'Motor relacional para transacciones simultáneas de 4 sedes', price: '$7.5 — $22.7 M', icon: CircuitBoard },
    { name: 'Debian Linux', type: 'Sistema Operativo', purpose: 'Plataforma estándar con soporte para periféricos de cobro', price: 'Libre', icon: Terminal },
    { name: 'Super Mayorista App', type: 'Desarrollo a Medida', purpose: 'Backend + Frontend bajo Proceso Unificado', price: 'A cotizar', icon: Code2 },
    { name: 'Google AI Ultra', type: 'Suscripción IA', purpose: 'Automatización de tareas y productividad del equipo', price: '$195.000', icon: BrainCircuit },
  ]

  return (
    <section id="requirements" className="border-b border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── HARDWARE ── */}
        <div className="mb-20">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-medium text-primary">02 / Hardware</p>
              <h2 className="text-4xl sm:text-5xl font-black leading-[1.0] tracking-tight text-foreground">
                Requerimientos de Hardware
              </h2>
            </div>
            <div className="rounded-2xl border border-border bg-muted/40 p-5 text-center">
              <p className="text-xs text-muted-foreground mb-1">Total Hardware</p>
              <p className="text-2xl font-black text-foreground">$21.263.892</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hardware.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <span className="rounded-full bg-foreground px-2.5 py-0.5 text-xs font-semibold text-background">
                      ×{item.qty}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground mb-4">
                    {item.specs}
                  </p>
                  <a href={item.link}>
                  <div className="flex items-center justify-between border-t border-border pt-3">
                    <p className="text-sm font-semibold text-foreground">{item.price}</p>
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                    
                  </div>
                  </a>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── SOFTWARE ── */}
        <div>
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-medium text-primary">02 / Software</p>
              <h2 className="text-4xl sm:text-5xl font-black leading-[1.0] tracking-tight text-foreground">
                Requerimientos de Software
              </h2>
            </div>
            <div className="rounded-2xl border border-border bg-muted/40 p-5 text-center">
              <p className="text-xs text-muted-foreground mb-1">Total Software</p>
              <p className="text-2xl font-black text-foreground">$8.4 — $22.7 M</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {software.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-card p-8 hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-foreground">{item.price}</p>
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.purpose}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
