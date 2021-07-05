
namespace ProyectosZec.Nuevo_Roezec.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Nuevo_Roezec.Naces")]
    [BasedOnRow(typeof(Entities.NacesRow), CheckNames = true)]
    public class NacesForm
    {
        public String Nace { get; set; }
        public String Codigo { get; set; }
        public String Descripcion { get; set; }

        [DisplayName("Sector"), LookupEditor(typeof(Entities.SectoresRow))]
        public Int32 SectorId { get; set; }
        [DisplayName("SubSector"), LookupEditor(typeof(Entities.SubsectoresRow), CascadeFrom = "SectorId")]
        public Int32 SubsectorId { get; set; }
    }
}