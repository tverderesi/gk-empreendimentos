import React from "react";
import { GridItem } from "../components/widgets/GridItem";
import { Grid } from "../components/widgets/Grid";
import { CustomBuildingBadge } from "../components/atoms/CustomBadge";

export default function Buildings() {
  return (
    <section className="lg:mt-6">
      <h1 className="text-4xl lg:text-5xl font-semibold text-primary uppercase text-center">
        Empreendimentos
      </h1>

      <Grid className="transition-all duration-500 ease-in-out">
        <CustomBuildingBadge icon="workspace_premium" status="new">
          <GridItem
            name={"Lumina"}
            link={"/empreendimentos/lumina"}
            imageURL={"lumina.jpg"}
            logoURL={"lumina-logo.png"}
          />
        </CustomBuildingBadge>
        <CustomBuildingBadge icon="workspace_premium" status="ongoing">
          <GridItem
            name={"Adra"}
            link={"/empreendimentos/adra"}
            imageURL={"adra.jpg"}
            logoURL={"adra-logo.png"}
          />
        </CustomBuildingBadge>
        <CustomBuildingBadge icon="workspace_premium" status="sold">
          <GridItem
            name={"Aion"}
            link={"/empreendimentos/aion"}
            imageURL={"aion.png"}
            logoURL={"aion-logo.png"}
          />
        </CustomBuildingBadge>
        <CustomBuildingBadge icon="workspace_premium" status="sold">
          <GridItem
            name={"San Diego"}
            link={"/empreendimentos/san-diego"}
            imageURL={"sanDiego.jpg"}
            logoURL={"sanDiego-logo.png"}
          />
        </CustomBuildingBadge>
        <CustomBuildingBadge icon="workspace_premium" status="sold">
          <GridItem
            name={"Porto Madero"}
            link={"/empreendimentos/porto-madero"}
            imageURL={"portoMadero.jpg"}
            logoURL={"portoMadero-logo.png"}
          />
        </CustomBuildingBadge>
        <CustomBuildingBadge icon="workspace_premium" status="sold">
          <GridItem
            name={"Porto Fino"}
            link={"/empreendimentos/porto-fino"}
            imageURL={"portoFino.jpg"}
            logoURL={"portoFino-logo.png"}
          />
        </CustomBuildingBadge>
        <CustomBuildingBadge icon="workspace_premium" status="sold">
          <GridItem
            name={"Varandas do Atlântico"}
            link={"empreendimentos/varandas-do-atlantico"}
            imageURL={"varandasAtlantico.jpg"}
            logoURL={"varandasAtlantico-logo.png"}
          />
        </CustomBuildingBadge>
        <CustomBuildingBadge icon="workspace_premium" status="sold">
          <GridItem
            name={"Rio Maggiore"}
            link={"empreendimentos/rio-maggiore"}
            imageURL={"rioMaggiore.jpg"}
            logoURL={"rioMaggiore-logo.png"}
          />
        </CustomBuildingBadge>
      </Grid>
    </section>
  );
}
