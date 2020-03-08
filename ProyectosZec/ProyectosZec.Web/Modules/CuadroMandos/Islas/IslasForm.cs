
namespace ProyectosZec.CuadroMandos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("CuadroMandos.Islas")]
    [BasedOnRow(typeof(Entities.IslasRow), CheckNames = true)]
    public class IslasForm
    {
        public String NombreIsla { get; set; }
        public String Isla { get; set; }
    }
}