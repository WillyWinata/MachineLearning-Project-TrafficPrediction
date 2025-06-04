import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Home, Code, BarChart3, Database } from "lucide-react";

export default function Navigation() {
  const pathname = window.location.href;

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    // { href: "/interactive", label: "Database", icon: Database },
    // { href: "/database", label: "Code", icon: Code },
    { href: "/interactive", label: "Interactive", icon: BarChart3 },
  ];

  return (
    <nav className="border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            target="_blank"
            href="https://colab.research.google.com/drive/1-1SADAFyUU2CVNB9ga7gGjbl7fvkoSlv#scrollTo=4GQiP7J1EjOk"
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-slate-900">TrafficAI</span>
            <Badge
              variant="secondary"
              className="ml-2 bg-gray-200 rounded-xl font-semibold"
            >
              v1.0
            </Badge>
          </a>

          <div className="flex items-center gap-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname.endsWith(item.href);

              return (
                <Button
                  key={item.href}
                  asChild
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className={`font-semibold ${
                    !isActive ? "hover:bg-gray-100" : ""
                  }`}
                >
                  <a
                    href={item.href}
                    className={`flex items-center gap-2 ${
                      isActive ? "bg-black text-white" : ""
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
