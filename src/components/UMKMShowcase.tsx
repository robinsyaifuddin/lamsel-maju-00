
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

// Sample data for UMKM showcase
const umkmList = [
  {
    id: 1,
    name: "Kopi Lamsel",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=3270",
    category: "Kuliner",
    location: "Kalianda"
  },
  {
    id: 2,
    name: "Batik Tapis Lamsel",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?q=80&w=2880",
    category: "Kerajinan",
    location: "Natar"
  },
  {
    id: 3,
    name: "Keripik Pisang",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=3270",
    category: "Kuliner",
    location: "Sidomulyo"
  }
];

export const UMKMShowcase = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleViewAllUMKM = () => {
    navigate('/umkm');
  };

  const handleViewProduct = (id: number) => {
    navigate(`/umkm/detail?id=${id}`);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">UMKM Lampung Selatan</h2>
            <p className="mt-2 text-gray-600">
              Dukung produk lokal dan temukan keunikan UMKM di Lampung Selatan
            </p>
          </div>
          <Button 
            variant="outline" 
            className="group flex items-center border-lamsel-green text-lamsel-green hover:bg-lamsel-green hover:text-white"
            onClick={handleViewAllUMKM}
          >
            Lihat Semua UMKM
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        {isMobile ? (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {umkmList.map((umkm) => (
                <CarouselItem key={umkm.id} className="pl-2 md:pl-4 basis-[260px]">
                  <Card className="umkm-card overflow-hidden h-[280px]">
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={umkm.image} 
                        alt={umkm.name}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-3 text-white">
                        <Badge className="mb-1 bg-lamsel-green text-xs px-2 py-1">
                          {umkm.category}
                        </Badge>
                        <h3 className="text-sm font-bold">{umkm.name}</h3>
                        <p className="text-xs opacity-90">{umkm.location}</p>
                      </div>
                    </div>
                    <CardContent className="p-3">
                      <Button 
                        className="w-full bg-lamsel-green hover:bg-lamsel-green/80 text-xs h-8"
                        onClick={() => handleViewProduct(umkm.id)}
                      >
                        Lihat Produk
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {umkmList.map((umkm) => (
              <Card key={umkm.id} className="umkm-card overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={umkm.image} 
                    alt={umkm.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <Badge className="mb-2 bg-lamsel-green">
                      {umkm.category}
                    </Badge>
                    <h3 className="text-xl font-bold">{umkm.name}</h3>
                    <p className="text-sm opacity-90">{umkm.location}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <Button 
                    className="w-full bg-lamsel-green hover:bg-lamsel-green/80"
                    onClick={() => handleViewProduct(umkm.id)}
                  >
                    Lihat Produk
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
